import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { isAdminEmail } from '@/lib/adminConfig';
import { supabase } from '@/integrations/supabase/client';
import { seedAllContent } from '@/lib/contentSeeder';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, Shield, BookOpen, Search, Edit, ChevronRight, Database, Upload, Check, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CmsLesson {
  id: string;
  icon: string;
  level: number;
  sort_order: number;
  title_en: string;
  title_ar: string;
  updated_at: string;
}

export default function AdminContent() {
  const { user } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [lessons, setLessons] = useState<CmsLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedProgress, setSeedProgress] = useState(0);
  const [seedMessage, setSeedMessage] = useState('');

  const isAdmin = isAdminEmail(user?.email);

  useEffect(() => {
    if (isAdmin) fetchLessons();
  }, [isAdmin]);

  const fetchLessons = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('cms_lessons' as any)
      .select('id, icon, level, sort_order, title_en, title_ar, updated_at')
      .order('level')
      .order('sort_order');
    if (!error && data) setLessons(data as any);
    setLoading(false);
  };

  const handleSeed = async () => {
    if (seeding) return;
    setSeeding(true);
    setSeedProgress(0);
    setSeedMessage('بدء نقل المحتوى...');
    try {
      await seedAllContent((msg, progress) => {
        setSeedMessage(msg);
        setSeedProgress(progress);
      });
      toast({ title: language === 'ar' ? 'تم بنجاح!' : 'Success!', description: language === 'ar' ? 'تم نقل كل المحتوى لقاعدة البيانات' : 'All content migrated to database' });
      await fetchLessons();
    } catch (err: any) {
      toast({ title: language === 'ar' ? 'خطأ' : 'Error', description: err.message, variant: 'destructive' });
    }
    setSeeding(false);
  };

  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) return lessons;
    const q = searchQuery.toLowerCase();
    return lessons.filter(l =>
      l.title_en.toLowerCase().includes(q) ||
      l.title_ar.toLowerCase().includes(q) ||
      l.id.toLowerCase().includes(q)
    );
  }, [searchQuery, lessons]);

  const getLevelLabel = (level: number) => {
    const labels: Record<number, { ar: string; en: string }> = {
      1: { ar: 'المستوى 1', en: 'Level 1' },
      2: { ar: 'المستوى 2', en: 'Level 2' },
      3: { ar: 'المستوى 3', en: 'Level 3' },
    };
    return language === 'ar' ? labels[level]?.ar : labels[level]?.en;
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
    totalLessons: language === 'ar' ? 'دروس في قاعدة البيانات' : 'Lessons in database',
    seedBtn: language === 'ar' ? 'نقل المحتوى لقاعدة البيانات' : 'Migrate Content to DB',
    seedDesc: language === 'ar' ? 'ينقل كل الدروس والاختبارات والمشاريع من الملفات إلى قاعدة البيانات' : 'Migrates all lessons, quizzes & projects from files to database',
    noLessons: language === 'ar' ? 'لا توجد دروس بعد. اضغط "نقل المحتوى" لنقل البيانات.' : 'No lessons yet. Click "Migrate Content" to seed data.',
    days: language === 'ar' ? 'أيام' : 'days',
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
        {/* Seed Button */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">{txt.seedBtn}</p>
                <p className="text-xs text-muted-foreground">{txt.seedDesc}</p>
              </div>
            </div>
            {seeding && (
              <div className="space-y-2">
                <Progress value={seedProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">{seedMessage}</p>
              </div>
            )}
            <Button onClick={handleSeed} disabled={seeding} className="w-full gap-2" size="sm">
              {seeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              {seeding ? `${Math.round(seedProgress)}%` : txt.seedBtn}
            </Button>
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
              <p className="text-2xl font-bold text-foreground">{lessons.length}</p>
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

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
          </div>
        )}

        {/* No lessons */}
        {!loading && lessons.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground text-sm">
              {txt.noLessons}
            </CardContent>
          </Card>
        )}

        {/* Lessons List */}
        {filteredLessons.map(lesson => (
          <Card
            key={lesson.id}
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(`/admin-content/${lesson.id}`)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-lg">
                    {lesson.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">
                      {language === 'ar' ? lesson.title_ar : lesson.title_en}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
                      <span>{getLevelLabel(lesson.level)}</span>
                      <span>•</span>
                      <span>7 {txt.days}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
