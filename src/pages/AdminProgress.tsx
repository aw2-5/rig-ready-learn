import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, Users, BookOpen, Trophy, Shield, Loader2 } from 'lucide-react';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';

import { isAdminEmail } from '@/lib/adminConfig';
const ALL_LESSONS = [...lessons, ...lessonsYear2, ...lessonsYear3];
const TOTAL_DAYS_PER_LESSON = 7;
const TOTAL_POSSIBLE_DAYS = ALL_LESSONS.length * TOTAL_DAYS_PER_LESSON;

interface UserData {
  id: string;
  name: string | null;
  created_at: string;
  completed_days: number;
  average_score: number | null;
  lessons: Array<{
    lesson_id: string;
    day_number: number;
    completed: boolean;
    score: number | null;
    submitted_at: string;
  }>;
}

export default function AdminProgress() {
  const { user } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  useEffect(() => {
    if (!isAdmin) return;

    const fetchData = async () => {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        const token = sessionData?.session?.access_token;
        if (!token) {
          setError('No session');
          setLoading(false);
          return;
        }

        const { data, error: fnError } = await supabase.functions.invoke('admin-progress', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (fnError) throw fnError;
        setUsers(data.users || []);
      } catch (err: any) {
        setError(err.message || 'Failed to load');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-sm mx-4">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h2 className="text-lg font-bold text-foreground mb-2">
              {language === 'ar' ? 'غير مصرح' : 'Unauthorized'}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'ar' ? 'هذه الصفحة للأدمن فقط' : 'This page is for admins only'}
            </p>
            <Button onClick={() => navigate('/home')}>
              {language === 'ar' ? 'رجوع' : 'Go Back'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const t = {
    en: {
      title: 'Admin Panel',
      subtitle: 'Students Progress',
      back: 'Back',
      totalStudents: 'Total Students',
      student: 'Student',
      progress: 'Progress',
      avgScore: 'Avg Score',
      completed: 'Completed',
      noScore: 'N/A',
      loading: 'Loading...',
      error: 'Error loading data',
      noStudents: 'No students found',
      joinedOn: 'Joined',
      lessons: 'Lessons',
      day: 'Day',
    },
    ar: {
      title: 'لوحة الأدمن',
      subtitle: 'تقدم الطلاب',
      back: 'رجوع',
      totalStudents: 'عدد الطلاب',
      student: 'الطالب',
      progress: 'التقدم',
      avgScore: 'المعدل',
      completed: 'مكتمل',
      noScore: 'غ/م',
      loading: 'جاري التحميل...',
      error: 'خطأ في تحميل البيانات',
      noStudents: 'لا يوجد طلاب',
      joinedOn: 'انضم',
      lessons: 'الدروس',
      day: 'يوم',
    },
  };

  const txt = t[language as 'en' | 'ar'] || t.en;

  const getLessonName = (lessonId: string) => {
    const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
    return lesson ? (language === 'ar' ? lesson.content.ar.title : lesson.content.en.title) : lessonId;
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
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-destructive" />
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
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">{txt.loading}</span>
          </div>
        ) : error ? (
          <Card>
            <CardContent className="p-6 text-center text-destructive">{txt.error}: {error}</CardContent>
          </Card>
        ) : (
          <>
            <Card variant="gradient">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{txt.totalStudents}</p>
                  <p className="text-2xl font-bold text-foreground">{users.length}</p>
                </div>
              </CardContent>
            </Card>

            {users.length === 0 ? (
              <p className="text-center text-muted-foreground py-10">{txt.noStudents}</p>
            ) : (
              users.map((u) => {
                const progressPercent = TOTAL_POSSIBLE_DAYS > 0
                  ? Math.round((u.completed_days / TOTAL_POSSIBLE_DAYS) * 100)
                  : 0;
                const isExpanded = expandedUser === u.id;

                // Group lessons for expanded view
                const lessonMap: Record<string, { days: number[]; scores: (number | null)[] }> = {};
                u.lessons.forEach((l) => {
                  if (!lessonMap[l.lesson_id]) lessonMap[l.lesson_id] = { days: [], scores: [] };
                  if (l.completed) lessonMap[l.lesson_id].days.push(l.day_number);
                  if (l.score !== null) lessonMap[l.lesson_id].scores.push(l.score);
                });

                return (
                  <Card
                    key={u.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setExpandedUser(isExpanded ? null : u.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                            {(u.name || '?')[0].toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{u.name || 'Unknown'}</p>
                            <p className="text-[10px] text-muted-foreground">
                              {txt.joinedOn}: {new Date(u.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <p className="text-lg font-bold text-foreground">{progressPercent}%</p>
                          <p className="text-[10px] text-muted-foreground">
                            {u.average_score !== null ? `${txt.avgScore}: ${u.average_score}%` : txt.noScore}
                          </p>
                        </div>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                      <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                        <span>{u.completed_days} / {TOTAL_POSSIBLE_DAYS} {txt.day}</span>
                        <span>{Object.keys(lessonMap).length} {txt.lessons}</span>
                      </div>

                      {isExpanded && Object.keys(lessonMap).length > 0 && (
                        <div className="mt-4 pt-3 border-t border-border space-y-2">
                          {Object.entries(lessonMap).map(([lessonId, data]) => {
                            const lessonProgress = Math.round((data.days.length / TOTAL_DAYS_PER_LESSON) * 100);
                            const lessonAvg = data.scores.length > 0
                              ? Math.round(data.scores.reduce((a, b) => a + (b || 0), 0) / data.scores.length)
                              : null;
                            return (
                              <div key={lessonId} className="bg-muted/50 rounded-lg p-2.5">
                                <div className="flex justify-between items-center mb-1">
                                  <p className="text-xs font-medium text-foreground truncate max-w-[60%]">
                                    {getLessonName(lessonId)}
                                  </p>
                                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                    <span>{data.days.length}/7</span>
                                    {lessonAvg !== null && (
                                      <span className="text-primary">{lessonAvg}%</span>
                                    )}
                                  </div>
                                </div>
                                <Progress value={lessonProgress} className="h-1.5" />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            )}
          </>
        )}
      </main>
    </div>
  );
}
