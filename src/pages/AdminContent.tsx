import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { isAdminEmail } from '@/lib/adminConfig';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, Shield, BookOpen, Search, Edit, ChevronRight, Image, HelpCircle } from 'lucide-react';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';

const ALL_LESSONS = [...lessons, ...lessonsYear2, ...lessonsYear3];

export default function AdminContent() {
  const { user } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const isAdmin = isAdminEmail(user?.email);

  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) return ALL_LESSONS;
    const q = searchQuery.toLowerCase();
    return ALL_LESSONS.filter(l => 
      l.content.en.title.toLowerCase().includes(q) ||
      l.content.ar.title.toLowerCase().includes(q) ||
      l.id.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const getLevelLabel = (lessonId: string) => {
    if (lessons.some(l => l.id === lessonId)) return language === 'ar' ? 'المستوى 1' : 'Level 1';
    if (lessonsYear2.some(l => l.id === lessonId)) return language === 'ar' ? 'المستوى 2' : 'Level 2';
    return language === 'ar' ? 'المستوى 3' : 'Level 3';
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-sm mx-4">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-lg font-bold text-foreground mb-2">
              {language === 'ar' ? 'غير مصرح' : 'Unauthorized'}
            </h2>
            <Button onClick={() => navigate('/home')}>
              {language === 'ar' ? 'رجوع' : 'Go Back'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const txt = {
    title: language === 'ar' ? 'إدارة المحتوى' : 'Content Management',
    subtitle: language === 'ar' ? 'تعديل الدروس والاختبارات والصور' : 'Edit lessons, quizzes & images',
    search: language === 'ar' ? 'ابحث عن درس...' : 'Search lesson...',
    totalLessons: language === 'ar' ? 'عدد الدروس' : 'Total Lessons',
    editLesson: language === 'ar' ? 'تعديل' : 'Edit',
    days: language === 'ar' ? 'أيام' : 'days',
    comingSoon: language === 'ar' ? 'محرر المحتوى قيد التطوير - سيتم تفعيله قريباً' : 'Content editor is under development - coming soon',
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-50 glass-header">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate('/home')}>
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Edit className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground text-lg">{txt.title}</h1>
                  <p className="text-xs text-muted-foreground">{txt.subtitle}</p>
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Notice */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-3 flex items-center gap-2 text-sm text-primary">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>{txt.comingSoon}</span>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{txt.totalLessons}</p>
              <p className="text-2xl font-bold text-foreground">{ALL_LESSONS.length}</p>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="relative">
          <Search className="absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground start-3" />
          <Input
            placeholder={txt.search}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="ps-10"
          />
        </div>

        {/* Lessons List */}
        {filteredLessons.map(lesson => (
          <Card key={lesson.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">
                      {language === 'ar' ? lesson.content.ar.title : lesson.content.en.title}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
                      <span>{getLevelLabel(lesson.id)}</span>
                      <span>•</span>
                      <span>7 {txt.days}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground" disabled>
                    <Image className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground" disabled>
                    <HelpCircle className="w-3.5 h-3.5" />
                  </Button>
                  <ChevronRight className={`w-4 h-4 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
