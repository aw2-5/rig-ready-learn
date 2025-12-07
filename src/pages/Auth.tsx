import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Globe, Mail, User, ChevronRight, Droplets, Lock, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-drilling.jpg';

export default function Auth() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { login, signUp, loginAsGuest } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<'language' | 'login' | 'signup'>('language');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageSelect = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setStep('login');
  };

  const validateForm = (): string | null => {
    if (!email || !password) {
      return language === 'ar' 
        ? 'يرجى ملء جميع الحقول' 
        : 'Please fill in all fields';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return language === 'ar' 
        ? 'يرجى إدخال بريد إلكتروني صحيح' 
        : 'Please enter a valid email';
    }
    if (password.length < 6) {
      return language === 'ar' 
        ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' 
        : 'Password must be at least 6 characters';
    }
    return null;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await login(email, password);
      if (error) {
        toast.error(error);
      } else {
        toast.success(language === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Logged in successfully!');
        navigate('/home');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    if (!fullName.trim()) {
      toast.error(language === 'ar' ? 'يرجى إدخال الاسم الكامل' : 'Please enter your full name');
      return;
    }

    if (password !== confirmPassword) {
      toast.error(language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await signUp(email, password, fullName, language);
      if (error) {
        toast.error(error);
      } else {
        toast.success(language === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
        navigate('/home');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    toast.success(language === 'ar' ? 'مرحباً بك كضيف!' : 'Welcome as guest!');
    navigate('/home');
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Logo & Title */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-accent shadow-glow mb-4">
            <Droplets className="w-10 h-10 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t('welcome')}
          </h1>
          <h2 className="text-4xl font-bold text-gradient mb-2">
            {t('appName')}
          </h2>
          <p className="text-muted-foreground">
            {t('appTagline')}
          </p>
        </div>

        {step === 'language' ? (
          <Card variant="glass" className="w-full max-w-md animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                {t('selectLanguage')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="interactive"
                size="xl"
                className="w-full justify-between bg-card hover:bg-secondary"
                onClick={() => handleLanguageSelect('en')}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="font-semibold">English</span>
                </span>
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="interactive"
                size="xl"
                className="w-full justify-between bg-card hover:bg-secondary"
                onClick={() => handleLanguageSelect('ar')}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🇸🇦</span>
                  <span className="font-semibold font-arabic">العربية</span>
                </span>
                <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </CardContent>
          </Card>
        ) : step === 'login' ? (
          <Card variant="glass" className="w-full max-w-md animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{t('loginWithEmail')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')}</Label>
                  <div className="relative">
                    <Mail className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                      placeholder="student@university.edu"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t('password')}</Label>
                  <div className="relative">
                    <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                      placeholder="••••••••"
                      dir="ltr"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? '...' : t('login')}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card/50 px-4 text-muted-foreground">
                    {t('orContinueWith')}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    resetForm();
                    setStep('signup');
                  }}
                >
                  <UserPlus className="w-5 h-5" />
                  {language === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account'}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={handleGuestLogin}
                >
                  <User className="w-5 h-5" />
                  {t('continueAsGuest')}
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full mt-4"
                onClick={() => setStep('language')}
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card variant="glass" className="w-full max-w-md animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">
                {language === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </Label>
                  <div className="relative">
                    <User className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEmail">{t('email')}</Label>
                  <div className="relative">
                    <Mail className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                    <Input
                      id="signupEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                      placeholder="student@university.edu"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">{t('password')}</Label>
                  <div className="relative">
                    <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                    <Input
                      id="signupPassword"
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
                  <Label htmlFor="confirmPassword">
                    {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                  </Label>
                  <div className="relative">
                    <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`${isRTL ? 'pr-10' : 'pl-10'} h-12`}
                      placeholder="••••••••"
                      dir="ltr"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? '...' : (language === 'ar' ? 'إنشاء حساب' : 'Create Account')}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card/50 px-4 text-muted-foreground">
                    {language === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => {
                  resetForm();
                  setStep('login');
                }}
              >
                {language === 'ar' ? 'تسجيل الدخول' : 'Log In'}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full mt-4"
                onClick={() => setStep('language')}
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
