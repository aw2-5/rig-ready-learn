import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface Profile {
  id: string;
  full_name: string | null;
  preferred_language: string;
  current_year: number;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isGuest: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, fullName: string, language: string) => Promise<{ error: string | null }>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
  upgradeGuestAccount: (email: string, password: string, fullName: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isGuest, setIsGuest] = useState<boolean>(() => {
    return localStorage.getItem('petrolearn-guest') === 'true';
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user profile
  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    
    if (!error && data) {
      setProfile(data);
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          setIsGuest(false);
          localStorage.removeItem('petrolearn-guest');
          // Defer profile fetch to avoid deadlock
          setTimeout(() => {
            fetchProfile(session.user.id);
          }, 0);
        } else {
          setProfile(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setIsGuest(false);
        localStorage.removeItem('petrolearn-guest');
        fetchProfile(session.user.id);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<{ error: string | null }> => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        return { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة / Invalid email or password' };
      }
      return { error: error.message };
    }

    return { error: null };
  };

  const signUp = async (
    email: string, 
    password: string, 
    fullName: string, 
    language: string
  ): Promise<{ error: string | null }> => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          preferred_language: language,
        },
      },
    });

    if (error) {
      if (error.message.includes('already registered')) {
        return { error: 'هذا البريد الإلكتروني مسجل مسبقاً / This email is already registered' };
      }
      return { error: error.message };
    }

    return { error: null };
  };

  const loginAsGuest = () => {
    setIsGuest(true);
    localStorage.setItem('petrolearn-guest', 'true');
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
    setIsGuest(false);
    localStorage.removeItem('petrolearn-guest');
    localStorage.removeItem('petrolearn-progress');
  };

  const upgradeGuestAccount = async (
    email: string, 
    password: string, 
    fullName: string
  ): Promise<{ error: string | null }> => {
    const language = localStorage.getItem('petrolearn-language') || 'ar';
    const result = await signUp(email, password, fullName, language);
    
    if (!result.error) {
      // Progress will be synced automatically after signup
      localStorage.removeItem('petrolearn-guest');
      setIsGuest(false);
    }
    
    return result;
  };

  const isAuthenticated = !!user || isGuest;

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        session,
        profile,
        isGuest,
        login, 
        signUp,
        loginAsGuest, 
        logout, 
        isAuthenticated,
        isLoading,
        upgradeGuestAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
