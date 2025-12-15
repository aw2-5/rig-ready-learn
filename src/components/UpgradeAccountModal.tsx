import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Cloud, Mail, Lock, User, Sparkles, CheckCircle } from 'lucide-react';

interface UpgradeAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpgradeAccountModal({ isOpen, onClose }: UpgradeAccountModalProps) {
  const { language, isRTL } = useLanguage();
  const { upgradeGuestAccount } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const texts = {
    ar: {
      title: 'ترقية حسابك',
      subtitle: 'احفظ تقدمك للأبد وزامن بين أجهزتك',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      upgrade: 'ترقية الحساب',
      cancel: 'لاحقاً',
      benefits: [
        'حفظ التقدم في السحابة',
        'المزامنة بين الأجهزة',
        'عدم فقدان البيانات',
      ],
      fillAll: 'يرجى ملء جميع الحقول',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
      shortPassword: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
      passwordMismatch: 'كلمات المرور غير متطابقة',
      success: 'تم ترقية حسابك بنجاح!',
      successMessage: 'سيتم مزامنة تقدمك تلقائياً',
      done: 'تم',
    },
    en: {
      title: 'Upgrade Your Account',
      subtitle: 'Save your progress forever and sync across devices',
      fullName: 'Full Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      upgrade: 'Upgrade Account',
      cancel: 'Later',
      benefits: [
        'Save progress in the cloud',
        'Sync across devices',
        'Never lose your data',
      ],
      fillAll: 'Please fill in all fields',
      invalidEmail: 'Please enter a valid email',
      shortPassword: 'Password must be at least 6 characters',
      passwordMismatch: 'Passwords do not match',
      success: 'Account upgraded successfully!',
      successMessage: 'Your progress will be synced automatically',
      done: 'Done',
    },
  };

  const t = texts[language];

  const validateForm = (): string | null => {
    if (!email || !password || !fullName || !confirmPassword) {
      return t.fillAll;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return t.invalidEmail;
    }
    if (password.length < 6) {
      return t.shortPassword;
    }
    if (password !== confirmPassword) {
      return t.passwordMismatch;
    }
    return null;
  };

  const handleUpgrade = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await upgradeGuestAccount(email, password, fullName);
      if (error) {
        toast.error(error);
      } else {
        setIsSuccess(true);
        toast.success(t.success);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setIsSuccess(false);
    onClose();
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-sm mx-auto bg-card border-border">
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {t.success}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.successMessage}
            </p>
            <Button onClick={handleClose} className="w-full">
              {t.done}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm mx-auto bg-card border-border">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Cloud className="w-7 h-7 text-accent-foreground" />
            </div>
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">
            {t.title}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">{t.subtitle}</p>
        </DialogHeader>

        {/* Benefits */}
        <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleUpgrade} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="upgrade-name">{t.fullName}</Label>
            <div className="relative">
              <User className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground`} />
              <Input
                id="upgrade-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`${isRTL ? 'pr-10' : 'pl-10'} h-11`}
                placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="upgrade-email">{t.email}</Label>
            <div className="relative">
              <Mail className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground`} />
              <Input
                id="upgrade-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${isRTL ? 'pr-10' : 'pl-10'} h-11`}
                placeholder="email@example.com"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="upgrade-password">{t.password}</Label>
            <div className="relative">
              <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground`} />
              <Input
                id="upgrade-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${isRTL ? 'pr-10' : 'pl-10'} h-11`}
                placeholder="••••••••"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="upgrade-confirm">{t.confirmPassword}</Label>
            <div className="relative">
              <Lock className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground`} />
              <Input
                id="upgrade-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`${isRTL ? 'pr-10' : 'pl-10'} h-11`}
                placeholder="••••••••"
                dir="ltr"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? '...' : t.upgrade}
            </Button>
            <Button type="button" variant="ghost" onClick={handleClose} className="w-full">
              {t.cancel}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
