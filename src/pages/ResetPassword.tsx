import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Droplets, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-drilling.jpg';

export default function ResetPassword() {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Listen for PASSWORD_RECOVERY event
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsRecovery(true);
      }
    });

    // Check URL hash for recovery type
    const hash = window.location.hash;
    if (hash.includes('type=recovery')) {
      setIsRecovery(true);
    }

    return () => subscription.unsubscribe();
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error(language === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      toast.error(language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        toast.error(error.message);
      } else {
        setDone(true);
        toast.success(language === 'ar' ? 'تم تغيير كلمة المرور بنجاح!' : 'Password changed successfully!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isRecovery && !done) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card variant="glass" className="w-full max-w-md text-center">
          <CardContent className="pt-6 space-y-4">
            <p className="text-muted-foreground">
              {language === 'ar' ? 'رابط غير صالح أو منتهي الصلاحية.' : 'Invalid or expired reset link.'}
            </p>
            <Button variant="accent" onClick={() => navigate('/auth')}>
              {language === 'ar' ? 'العودة لتسجيل الدخول' : 'Back to Login'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (done) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card variant="glass" className="w-full max-w-md text-center">
          <CardContent className="pt-6 space-y-4">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <p className="text-foreground font-semibold">
              {language === 'ar' ? 'تم تغيير كلمة المرور بنجاح!' : 'Password changed successfully!'}
            </p>
            <Button variant="accent" onClick={() => navigate('/auth')}>
              {language === 'ar' ? 'تسجيل الدخول' : 'Log In'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-accent shadow-glow mb-4">
            <Droplets className="w-10 h-10 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {language === 'ar' ? 'إعادة تعيين كلمة المرور' : 'Reset Password'}
          </h1>
        </div>

        <Card variant="glass" className="w-full max-w-md">
          <CardContent className="pt-6">
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-2">
                <Label>{language === 'ar' ? 'كلمة المرور الجديدة' : 'New Password'}</Label>
                <div className="relative">
                  <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                    placeholder="••••••••"
                    dir="ltr"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>{language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}</Label>
                <div className="relative">
                  <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                    placeholder="••••••••"
                    dir="ltr"
                  />
                </div>
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? '...' : (language === 'ar' ? 'تغيير كلمة المرور' : 'Change Password')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
