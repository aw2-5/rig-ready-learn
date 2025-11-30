import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Globe, Mail, User, ChevronRight, Droplets } from 'lucide-react';
import heroImage from '@/assets/hero-drilling.jpg';

export default function Auth() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<'language' | 'login'>('language');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageSelect = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setStep('login');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate('/home');
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
        ) : (
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
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t('password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12"
                    placeholder="••••••••"
                  />
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

              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={handleGuestLogin}
              >
                <User className="w-5 h-5" />
                {t('continueAsGuest')}
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
