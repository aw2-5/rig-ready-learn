import { supabase } from '@/integrations/supabase/client';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';
import { weeklyContent } from '@/data/weeklyContent';
import { weeklyContentYear2 } from '@/data/weeklyContentYear2';
import { weeklyContentYear3 } from '@/data/weeklyContentYear3';

type ProgressCallback = (message: string, progress: number) => void;

export async function seedAllContent(onProgress?: ProgressCallback) {
  const allLessons = [
    ...lessons.map((l, i) => ({ ...l, level: 1, sort_order: i })),
    ...lessonsYear2.map((l, i) => ({ ...l, level: 2, sort_order: i })),
    ...lessonsYear3.map((l, i) => ({ ...l, level: 3, sort_order: i })),
  ];
  const allWeekly = [...weeklyContent, ...weeklyContentYear2, ...weeklyContentYear3];
  const total = allLessons.length;

  // Step 1: Insert lessons
  onProgress?.('جاري إدراج الدروس...', 5);
  for (let i = 0; i < allLessons.length; i++) {
    const l = allLessons[i];
    const { error } = await supabase.from('cms_lessons' as any).upsert({
      id: l.id,
      icon: l.icon,
      level: l.level,
      sort_order: l.sort_order,
      title_en: l.content.en.title,
      title_ar: l.content.ar.title,
      definition_en: l.content.en.definition,
      definition_ar: l.content.ar.definition,
      explanation_en: l.content.en.explanation,
      explanation_ar: l.content.ar.explanation,
      summary_en: l.content.en.summary,
      summary_ar: l.content.ar.summary,
    } as any, { onConflict: 'id' } as any);
    if (error) throw new Error(`Lesson ${l.id}: ${error.message}`);
    onProgress?.(`درس ${i + 1}/${total}: ${l.content.ar.title}`, 5 + (i / total) * 30);
  }

  // Step 2: Insert daily content
  onProgress?.('جاري إدراج المحتوى اليومي...', 35);
  for (let i = 0; i < allWeekly.length; i++) {
    const wl = allWeekly[i];
    for (const day of wl.days) {
      const contentEn = day.content.en;
      const contentAr = day.content.ar;

      const { error } = await supabase.from('cms_daily_content' as any).upsert({
        lesson_id: wl.lessonId,
        day_number: day.day,
        type: day.type,
        title_en: contentEn.title,
        title_ar: contentAr.title,
        explanation_en: contentEn.explanation,
        explanation_ar: contentAr.explanation,
        key_terms_en: contentEn.keyTerms || [],
        key_terms_ar: contentAr.keyTerms || [],
        practice_question_en: contentEn.practiceQuestion || null,
        practice_question_ar: contentAr.practiceQuestion || null,
      } as any, { onConflict: 'lesson_id,day_number' } as any);
      if (error) throw new Error(`Day ${day.day} of ${wl.lessonId}: ${error.message}`);
    }
    onProgress?.(`محتوى يومي ${i + 1}/${allWeekly.length}`, 35 + (i / allWeekly.length) * 30);
  }

  // Step 3: Insert quiz questions (Day 6 quizzes)
  onProgress?.('جاري إدراج أسئلة الاختبارات...', 65);
  for (let i = 0; i < allWeekly.length; i++) {
    const wl = allWeekly[i];
    const quizDay = wl.days.find(d => d.type === 'quiz' && d.quiz);
    if (quizDay?.quiz) {
      // Delete existing quiz questions for this lesson first
      await supabase.from('cms_quiz_questions' as any).delete().eq('lesson_id', wl.lessonId);

      const questionsEn = quizDay.quiz.en;
      const questionsAr = quizDay.quiz.ar;
      const count = Math.min(questionsEn.length, questionsAr.length);

      for (let q = 0; q < count; q++) {
        const { error } = await supabase.from('cms_quiz_questions' as any).insert({
          lesson_id: wl.lessonId,
          question_en: questionsEn[q].question,
          question_ar: questionsAr[q].question,
          options_en: questionsEn[q].options,
          options_ar: questionsAr[q].options,
          correct_answer: questionsEn[q].correctAnswer,
          sort_order: q,
        } as any);
        if (error) throw new Error(`Quiz Q${q} of ${wl.lessonId}: ${error.message}`);
      }
    }
    onProgress?.(`اختبارات ${i + 1}/${allWeekly.length}`, 65 + (i / allWeekly.length) * 20);
  }

  // Step 4: Insert projects (Day 7)
  onProgress?.('جاري إدراج المشاريع...', 85);
  for (let i = 0; i < allWeekly.length; i++) {
    const wl = allWeekly[i];
    const projectDay = wl.days.find(d => d.type === 'project' && d.project);
    if (projectDay?.project) {
      // Delete existing project for this lesson
      await supabase.from('cms_projects' as any).delete().eq('lesson_id', wl.lessonId);

      const { error } = await supabase.from('cms_projects' as any).insert({
        lesson_id: wl.lessonId,
        title_en: projectDay.project.en.title,
        title_ar: projectDay.project.ar.title,
        description_en: projectDay.project.en.description,
        description_ar: projectDay.project.ar.description,
        instructions_en: projectDay.project.en.instructions,
        instructions_ar: projectDay.project.ar.instructions,
        submission_type: projectDay.project.en.submissionType,
      } as any);
      if (error) throw new Error(`Project of ${wl.lessonId}: ${error.message}`);
    }
    onProgress?.(`مشاريع ${i + 1}/${allWeekly.length}`, 85 + (i / allWeekly.length) * 15);
  }

  onProgress?.('تم نقل كل المحتوى بنجاح! ✅', 100);
}
