import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email?: string;
  name: string;
  isGuest: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginAsGuest: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('petrolearn-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, password: string) => {
    // Simulated login - will be replaced with real auth later
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name: email.split('@')[0],
      isGuest: false,
    };
    setUser(newUser);
    localStorage.setItem('petrolearn-user', JSON.stringify(newUser));
  };

  const loginAsGuest = () => {
    const guestUser: User = {
      id: crypto.randomUUID(),
      name: 'Guest',
      isGuest: true,
    };
    setUser(guestUser);
    localStorage.setItem('petrolearn-user', JSON.stringify(guestUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('petrolearn-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, loginAsGuest, logout, isAuthenticated: !!user }}>
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
