import { SEOHead } from '@/components/SEOHead';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Linkedin,
  Instagram,
  Send,
  MessageCircle,
  User,
  ExternalLink,
} from 'lucide-react';

interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    handle: 'Aws Ali',
    url: 'https://www.linkedin.com/in/aws-ali-05606a322?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    icon: Linkedin,
    color: 'bg-[#0A66C2]',
  },
  {
    name: 'Instagram',
    handle: '@aw2_5',
    url: 'https://www.instagram.com/aw2_5?igsi=cWhhb2UxMXZxc3Z5&utm_source=qr',
    icon: Instagram,
    color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
  },
  {
    name: 'Telegram',
    handle: '@aw2_5',
    url: 'https://t.me/aw2_5',
    icon: Send,
    color: 'bg-[#229ED9]',
  },
  {
    name: 'WhatsApp',
    handle: '+964 773 165 6845',
    url: 'https://wa.me/9647731656845',
    icon: MessageCircle,
    color: 'bg-[#25D366]',
  },
];

export default function CreatorInfo() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const isRTL = language === 'ar';
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  const content = {
    en: {
      title: 'About the Creator',
      subtitle: 'Connect with Aws Ali — the developer behind Drill A to Z.',
      back: 'Back',
      contactTitle: 'Get in Touch',
      contactDesc: 'Reach out through any of these channels for questions, feedback, or collaboration.',
      openProfile: 'Open Profile',
      sendMessage: 'Send Message',
    },
    ar: {
      title: 'معلومات المنشئ',
      subtitle: 'تواصل مع أوس علي — مطور تطبيق Drill A to Z.',
      back: 'رجوع',
      contactTitle: 'تواصل معي',
      contactDesc: 'تواصل عبر أي من هذه القنوات للأسئلة أو الملاحظات أو التعاون.',
      openProfile: 'فتح الملف الشخصي',
      sendMessage: 'إرسال رسالة',
    },
  }[language];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title={content.title}
        description="Meet the creator of Drill A to Z. Connect on LinkedIn, Instagram, Telegram, or WhatsApp."
        url="https://drillaz.com/creator-info"
      />

      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate('/about')}>
              <BackArrow className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground text-sm">{content.title}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/about')}
                aria-label={content.back}
              >
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Creator Hero */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="w-24 h-24 rounded-full gradient-accent flex items-center justify-center mx-auto shadow-glow">
            <User className="w-12 h-12 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Aws Ali</h1>
            <p className="text-sm text-muted-foreground mt-1">{content.subtitle}</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 animate-fade-in">
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold text-foreground">{content.contactTitle}</h2>
            <p className="text-sm text-muted-foreground">{content.contactDesc}</p>
          </div>

          <div className="grid gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const isMessaging = link.name === 'WhatsApp' || link.name === 'Telegram';
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card
                    variant="glass"
                    className="transition-all hover:scale-[1.01] hover:shadow-glow"
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground">{link.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {link.handle}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="shrink-0 gap-1">
                        {isMessaging ? content.sendMessage : content.openProfile}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
