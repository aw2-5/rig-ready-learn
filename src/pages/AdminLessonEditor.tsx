import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { isAdminEmail } from '@/lib/adminConfig';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save, Loader2, Plus, Trash2, BookOpen, HelpCircle, FolderOpen, Image, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface LessonData {
  id: string;
  icon: string;
  level: number;
  sort_order: number;
  title_en: string;
  title_ar: string;
  definition_en: string;
  definition_ar: string;
  explanation_en: string;
  explanation_ar: string;
  summary_en: string;
  summary_ar: string;
}

interface DailyContentData {
  id: string;
  lesson_id: string;
  day_number: number;
  type: string;
  title_en: string;
  title_ar: string;
  explanation_en: string;
  explanation_ar: string;
  key_terms_en: any[];
  key_terms_ar: any[];
  practice_question_en: any;
  practice_question_ar: any;
}

interface QuizQuestion {
  id: string;
  lesson_id: string;
  question_en: string;
  question_ar: string;
  options_en: string[];
  options_ar: string[];
  correct_answer: number;
  sort_order: number;
}

interface ProjectData {
  id: string;
  lesson_id: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  instructions_en: string[];
  instructions_ar: string[];
  submission_type: string;
}

export default function AdminLessonEditor() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const isAdmin = isAdminEmail(user?.email);

  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [dailyContent, setDailyContent] = useState<DailyContentData[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  useEffect(() => {
    if (isAdmin && id) loadAll();
  }, [isAdmin, id]);

  const loadAll = async () => {
    setLoading(true);
    const [lessonRes, dailyRes, quizRes, projectRes] = await Promise.all([
      supabase.from('cms_lessons' as any).select('*').eq('id', id).single(),
      supabase.from('cms_daily_content' as any).select('*').eq('lesson_id', id).order('day_number'),
      supabase.from('cms_quiz_questions' as any).select('*').eq('lesson_id', id).order('sort_order'),
      supabase.from('cms_projects' as any).select('*').eq('lesson_id', id).limit(1),
    ]);
    if (lessonRes.data) setLesson(lessonRes.data as any);
    if (dailyRes.data) setDailyContent(dailyRes.data as any);
    if (quizRes.data) setQuizQuestions(quizRes.data as any);
    if (projectRes.data && (projectRes.data as any[]).length > 0) setProject((projectRes.data as any[])[0]);
    setLoading(false);
  };

  const saveLesson = async () => {
    if (!lesson) return;
    setSaving(true);
    const { error } = await supabase.from('cms_lessons' as any).update({
      icon: lesson.icon,
      title_en: lesson.title_en,
      title_ar: lesson.title_ar,
      definition_en: lesson.definition_en,
      definition_ar: lesson.definition_ar,
      explanation_en: lesson.explanation_en,
      explanation_ar: lesson.explanation_ar,
      summary_en: lesson.summary_en,
      summary_ar: lesson.summary_ar,
    } as any).eq('id', lesson.id);
    setSaving(false);
    if (error) {
      toast({ title: 'خطأ', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: language === 'ar' ? 'تم الحفظ ✅' : 'Saved ✅' });
    }
  };

  const saveDayContent = async (day: DailyContentData) => {
    setSaving(true);
    const { error } = await supabase.from('cms_daily_content' as any).update({
      title_en: day.title_en,
      title_ar: day.title_ar,
      explanation_en: day.explanation_en,
      explanation_ar: day.explanation_ar,
      key_terms_en: day.key_terms_en,
      key_terms_ar: day.key_terms_ar,
      practice_question_en: day.practice_question_en,
      practice_question_ar: day.practice_question_ar,
    } as any).eq('id', day.id);
    setSaving(false);
    if (error) {
      toast({ title: 'خطأ', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: language === 'ar' ? 'تم حفظ اليوم ✅' : 'Day saved ✅' });
    }
  };

  const saveQuizQuestion = async (q: QuizQuestion) => {
    setSaving(true);
    const { error } = await supabase.from('cms_quiz_questions' as any).update({
      question_en: q.question_en,
      question_ar: q.question_ar,
      options_en: q.options_en,
      options_ar: q.options_ar,
      correct_answer: q.correct_answer,
      sort_order: q.sort_order,
    } as any).eq('id', q.id);
    setSaving(false);
    if (error) {
      toast({ title: 'خطأ', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: language === 'ar' ? 'تم حفظ السؤال ✅' : 'Question saved ✅' });
    }
  };

  const addQuizQuestion = async () => {
    if (!id) return;
    const { data, error } = await supabase.from('cms_quiz_questions' as any).insert({
      lesson_id: id,
      question_en: 'New question',
      question_ar: 'سؤال جديد',
      options_en: ['Option A', 'Option B', 'Option C', 'Option D'],
      options_ar: ['خيار أ', 'خيار ب', 'خيار ج', 'خيار د'],
      correct_answer: 0,
      sort_order: quizQuestions.length,
    } as any).select().single();
    if (data) setQuizQuestions([...quizQuestions, data as any]);
  };

  const deleteQuizQuestion = async (qId: string) => {
    await supabase.from('cms_quiz_questions' as any).delete().eq('id', qId);
    setQuizQuestions(quizQuestions.filter(q => q.id !== qId));
  };

  const saveProject = async () => {
    if (!project) return;
    setSaving(true);
    const { error } = await supabase.from('cms_projects' as any).update({
      title_en: project.title_en,
      title_ar: project.title_ar,
      description_en: project.description_en,
      description_ar: project.description_ar,
      instructions_en: project.instructions_en,
      instructions_ar: project.instructions_ar,
      submission_type: project.submission_type,
    } as any).eq('id', project.id);
    setSaving(false);
    if (error) {
      toast({ title: 'خطأ', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: language === 'ar' ? 'تم حفظ المشروع ✅' : 'Project saved ✅' });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (!file || !id) return;
    const path = `${id}/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('lesson-images').upload(path, file);
    if (error) {
      toast({ title: 'خطأ', description: error.message, variant: 'destructive' });
      return;
    }
    const { data: urlData } = supabase.storage.from('lesson-images').getPublicUrl(path);
    // Copy the URL to clipboard
    navigator.clipboard.writeText(urlData.publicUrl);
    toast({
      title: language === 'ar' ? 'تم رفع الصورة ✅' : 'Image uploaded ✅',
      description: language === 'ar' ? 'تم نسخ الرابط' : 'URL copied to clipboard',
    });
  };

  const updateDay = (dayNum: number, field: string, value: any) => {
    setDailyContent(prev => prev.map(d =>
      d.day_number === dayNum ? { ...d, [field]: value } : d
    ));
  };

  const updateQuiz = (qId: string, field: string, value: any) => {
    setQuizQuestions(prev => prev.map(q =>
      q.id === qId ? { ...q, [field]: value } : q
    ));
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive font-bold">Unauthorized</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-sm mx-4">
          <CardContent className="p-6 text-center">
            <p className="text-foreground mb-4">{language === 'ar' ? 'الدرس غير موجود' : 'Lesson not found'}</p>
            <Button onClick={() => navigate('/admin-content')}>{language === 'ar' ? 'رجوع' : 'Back'}</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const learningDays = dailyContent.filter(d => d.type === 'learning');

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass-header">
        <div className="container max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => navigate('/admin-content')}>
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              <div>
                <h1 className="font-bold text-foreground text-sm truncate max-w-[200px]">
                  {language === 'ar' ? lesson.title_ar : lesson.title_en}
                </h1>
                <p className="text-[10px] text-muted-foreground">
                  {language === 'ar' ? `المستوى ${lesson.level}` : `Level ${lesson.level}`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* Image Upload */}
              <label className="cursor-pointer">
                <input type="file" accept="image/*" className="hidden" onChange={e => handleImageUpload(e, 'general')} />
                <Button variant="ghost" size="icon" asChild>
                  <span><Image className="w-4 h-4" /></span>
                </Button>
              </label>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-3xl mx-auto px-4 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full overflow-x-auto flex-nowrap mb-4">
            <TabsTrigger value="info" className="text-xs">
              {language === 'ar' ? 'معلومات' : 'Info'}
            </TabsTrigger>
            {learningDays.map(d => (
              <TabsTrigger key={d.day_number} value={`day-${d.day_number}`} className="text-xs">
                {language === 'ar' ? `يوم ${d.day_number}` : `Day ${d.day_number}`}
              </TabsTrigger>
            ))}
            <TabsTrigger value="quiz" className="text-xs">
              {language === 'ar' ? 'الاختبار' : 'Quiz'}
            </TabsTrigger>
            <TabsTrigger value="project" className="text-xs">
              {language === 'ar' ? 'المشروع' : 'Project'}
            </TabsTrigger>
          </TabsList>

          {/* Info Tab */}
          <TabsContent value="info">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">Icon</Label>
                    <Input value={lesson.icon} onChange={e => setLesson({ ...lesson, icon: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">ID</Label>
                    <Input value={lesson.id} disabled className="opacity-50" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Title (EN)</Label>
                  <Input value={lesson.title_en} onChange={e => setLesson({ ...lesson, title_en: e.target.value })} />
                </div>
                <div>
                  <Label className="text-xs">العنوان (AR)</Label>
                  <Input value={lesson.title_ar} onChange={e => setLesson({ ...lesson, title_ar: e.target.value })} dir="rtl" />
                </div>
                <div>
                  <Label className="text-xs">Definition (EN)</Label>
                  <Textarea value={lesson.definition_en} onChange={e => setLesson({ ...lesson, definition_en: e.target.value })} rows={3} />
                </div>
                <div>
                  <Label className="text-xs">التعريف (AR)</Label>
                  <Textarea value={lesson.definition_ar} onChange={e => setLesson({ ...lesson, definition_ar: e.target.value })} rows={3} dir="rtl" />
                </div>
                <div>
                  <Label className="text-xs">Explanation (EN)</Label>
                  <Textarea value={lesson.explanation_en} onChange={e => setLesson({ ...lesson, explanation_en: e.target.value })} rows={3} />
                </div>
                <div>
                  <Label className="text-xs">الشرح (AR)</Label>
                  <Textarea value={lesson.explanation_ar} onChange={e => setLesson({ ...lesson, explanation_ar: e.target.value })} rows={3} dir="rtl" />
                </div>
                <div>
                  <Label className="text-xs">Summary (EN)</Label>
                  <Textarea value={lesson.summary_en} onChange={e => setLesson({ ...lesson, summary_en: e.target.value })} rows={2} />
                </div>
                <div>
                  <Label className="text-xs">الملخص (AR)</Label>
                  <Textarea value={lesson.summary_ar} onChange={e => setLesson({ ...lesson, summary_ar: e.target.value })} rows={2} dir="rtl" />
                </div>
                <Button onClick={saveLesson} disabled={saving} className="w-full gap-2">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {language === 'ar' ? 'حفظ' : 'Save'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Day Tabs */}
          {learningDays.map(day => (
            <TabsContent key={day.day_number} value={`day-${day.day_number}`}>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {language === 'ar' ? `اليوم ${day.day_number}` : `Day ${day.day_number}`}
                  </h3>
                  <div>
                    <Label className="text-xs">Title (EN)</Label>
                    <Input value={day.title_en} onChange={e => updateDay(day.day_number, 'title_en', e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-xs">العنوان (AR)</Label>
                    <Input value={day.title_ar} onChange={e => updateDay(day.day_number, 'title_ar', e.target.value)} dir="rtl" />
                  </div>
                  <div>
                    <Label className="text-xs">Content (EN) — HTML</Label>
                    <Textarea
                      value={day.explanation_en}
                      onChange={e => updateDay(day.day_number, 'explanation_en', e.target.value)}
                      rows={12}
                      className="font-mono text-xs"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">المحتوى (AR) — HTML</Label>
                    <Textarea
                      value={day.explanation_ar}
                      onChange={e => updateDay(day.day_number, 'explanation_ar', e.target.value)}
                      rows={12}
                      dir="rtl"
                      className="font-mono text-xs"
                    />
                  </div>

                  {/* Key Terms */}
                  <div>
                    <Label className="text-xs font-bold">{language === 'ar' ? 'المصطلحات الرئيسية (EN)' : 'Key Terms (EN)'}</Label>
                    {(day.key_terms_en || []).map((kt: any, idx: number) => (
                      <div key={idx} className="flex gap-2 mt-1">
                        <Input
                          placeholder="Term"
                          value={kt.term}
                          onChange={e => {
                            const updated = [...day.key_terms_en];
                            updated[idx] = { ...updated[idx], term: e.target.value };
                            updateDay(day.day_number, 'key_terms_en', updated);
                          }}
                          className="text-xs"
                        />
                        <Input
                          placeholder="Definition"
                          value={kt.definition}
                          onChange={e => {
                            const updated = [...day.key_terms_en];
                            updated[idx] = { ...updated[idx], definition: e.target.value };
                            updateDay(day.day_number, 'key_terms_en', updated);
                          }}
                          className="text-xs"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0"
                          onClick={() => {
                            const updated = day.key_terms_en.filter((_: any, i: number) => i !== idx);
                            updateDay(day.day_number, 'key_terms_en', updated);
                          }}
                        >
                          <Trash2 className="w-3 h-3 text-destructive" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 text-xs gap-1"
                      onClick={() => updateDay(day.day_number, 'key_terms_en', [...(day.key_terms_en || []), { term: '', definition: '' }])}
                    >
                      <Plus className="w-3 h-3" /> Add Term
                    </Button>
                  </div>

                  <div>
                    <Label className="text-xs font-bold">{language === 'ar' ? 'المصطلحات الرئيسية (AR)' : 'Key Terms (AR)'}</Label>
                    {(day.key_terms_ar || []).map((kt: any, idx: number) => (
                      <div key={idx} className="flex gap-2 mt-1">
                        <Input
                          placeholder="المصطلح"
                          value={kt.term}
                          onChange={e => {
                            const updated = [...day.key_terms_ar];
                            updated[idx] = { ...updated[idx], term: e.target.value };
                            updateDay(day.day_number, 'key_terms_ar', updated);
                          }}
                          className="text-xs"
                          dir="rtl"
                        />
                        <Input
                          placeholder="التعريف"
                          value={kt.definition}
                          onChange={e => {
                            const updated = [...day.key_terms_ar];
                            updated[idx] = { ...updated[idx], definition: e.target.value };
                            updateDay(day.day_number, 'key_terms_ar', updated);
                          }}
                          className="text-xs"
                          dir="rtl"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0"
                          onClick={() => {
                            const updated = day.key_terms_ar.filter((_: any, i: number) => i !== idx);
                            updateDay(day.day_number, 'key_terms_ar', updated);
                          }}
                        >
                          <Trash2 className="w-3 h-3 text-destructive" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 text-xs gap-1"
                      onClick={() => updateDay(day.day_number, 'key_terms_ar', [...(day.key_terms_ar || []), { term: '', definition: '' }])}
                    >
                      <Plus className="w-3 h-3" /> إضافة مصطلح
                    </Button>
                  </div>

                  <Button onClick={() => saveDayContent(day)} disabled={saving} className="w-full gap-2">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {language === 'ar' ? 'حفظ اليوم' : 'Save Day'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}

          {/* Quiz Tab */}
          <TabsContent value="quiz">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  {language === 'ar' ? `الاختبار (${quizQuestions.length} أسئلة)` : `Quiz (${quizQuestions.length} questions)`}
                </h3>
                <Button variant="outline" size="sm" className="text-xs gap-1" onClick={addQuizQuestion}>
                  <Plus className="w-3 h-3" />
                  {language === 'ar' ? 'إضافة سؤال' : 'Add Question'}
                </Button>
              </div>

              {quizQuestions.map((q, qIdx) => (
                <Card key={q.id}>
                  <CardContent className="p-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary">#{qIdx + 1}</span>
                      <Button variant="ghost" size="icon" onClick={() => deleteQuizQuestion(q.id)}>
                        <Trash2 className="w-3 h-3 text-destructive" />
                      </Button>
                    </div>
                    <div>
                      <Label className="text-xs">Question (EN)</Label>
                      <Textarea
                        value={q.question_en}
                        onChange={e => updateQuiz(q.id, 'question_en', e.target.value)}
                        rows={2}
                        className="text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">السؤال (AR)</Label>
                      <Textarea
                        value={q.question_ar}
                        onChange={e => updateQuiz(q.id, 'question_ar', e.target.value)}
                        rows={2}
                        className="text-xs"
                        dir="rtl"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {(q.options_en || []).map((opt: string, oIdx: number) => (
                        <div key={oIdx}>
                          <Label className="text-[10px]">
                            Option {oIdx + 1} (EN) {oIdx === q.correct_answer && '✅'}
                          </Label>
                          <Input
                            value={opt}
                            onChange={e => {
                              const updated = [...q.options_en];
                              updated[oIdx] = e.target.value;
                              updateQuiz(q.id, 'options_en', updated);
                            }}
                            className="text-xs"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {(q.options_ar || []).map((opt: string, oIdx: number) => (
                        <div key={oIdx}>
                          <Label className="text-[10px]">
                            خيار {oIdx + 1} (AR) {oIdx === q.correct_answer && '✅'}
                          </Label>
                          <Input
                            value={opt}
                            onChange={e => {
                              const updated = [...q.options_ar];
                              updated[oIdx] = e.target.value;
                              updateQuiz(q.id, 'options_ar', updated);
                            }}
                            className="text-xs"
                            dir="rtl"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <Label className="text-xs">{language === 'ar' ? 'الإجابة الصحيحة (0-3)' : 'Correct Answer (0-3)'}</Label>
                      <Input
                        type="number"
                        min={0}
                        max={3}
                        value={q.correct_answer}
                        onChange={e => updateQuiz(q.id, 'correct_answer', parseInt(e.target.value) || 0)}
                        className="text-xs w-20"
                      />
                    </div>
                    <Button onClick={() => saveQuizQuestion(q)} disabled={saving} size="sm" className="w-full gap-1 text-xs">
                      {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                      {language === 'ar' ? 'حفظ السؤال' : 'Save Question'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Project Tab */}
          <TabsContent value="project">
            {project ? (
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-primary" />
                    {language === 'ar' ? 'مشروع الأسبوع' : 'Weekly Project'}
                  </h3>
                  <div>
                    <Label className="text-xs">Title (EN)</Label>
                    <Input value={project.title_en} onChange={e => setProject({ ...project, title_en: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">العنوان (AR)</Label>
                    <Input value={project.title_ar} onChange={e => setProject({ ...project, title_ar: e.target.value })} dir="rtl" />
                  </div>
                  <div>
                    <Label className="text-xs">Description (EN)</Label>
                    <Textarea value={project.description_en} onChange={e => setProject({ ...project, description_en: e.target.value })} rows={3} />
                  </div>
                  <div>
                    <Label className="text-xs">الوصف (AR)</Label>
                    <Textarea value={project.description_ar} onChange={e => setProject({ ...project, description_ar: e.target.value })} rows={3} dir="rtl" />
                  </div>
                  <div>
                    <Label className="text-xs">{language === 'ar' ? 'التعليمات (EN) - سطر لكل تعليمة' : 'Instructions (EN) - one per line'}</Label>
                    <Textarea
                      value={(project.instructions_en || []).join('\n')}
                      onChange={e => setProject({ ...project, instructions_en: e.target.value.split('\n') })}
                      rows={6}
                      className="text-xs"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">{language === 'ar' ? 'التعليمات (AR) - سطر لكل تعليمة' : 'Instructions (AR) - one per line'}</Label>
                    <Textarea
                      value={(project.instructions_ar || []).join('\n')}
                      onChange={e => setProject({ ...project, instructions_ar: e.target.value.split('\n') })}
                      rows={6}
                      className="text-xs"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">{language === 'ar' ? 'نوع التسليم' : 'Submission Type'}</Label>
                    <select
                      value={project.submission_type}
                      onChange={e => setProject({ ...project, submission_type: e.target.value })}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <Button onClick={saveProject} disabled={saving} className="w-full gap-2">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {language === 'ar' ? 'حفظ المشروع' : 'Save Project'}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground text-sm">
                  {language === 'ar' ? 'لا يوجد مشروع لهذا الدرس' : 'No project for this lesson'}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
