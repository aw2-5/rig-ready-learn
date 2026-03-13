import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { lessons, Lesson, QuizQuestion } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';
import { weeklyContent, DailyContent, WeeklyLesson } from '@/data/weeklyContent';
import { weeklyContentYear2 } from '@/data/weeklyContentYear2';
import { weeklyContentYear3 } from '@/data/weeklyContentYear3';

const allHardcodedLessons = [...lessons, ...lessonsYear2, ...lessonsYear3];
const allHardcodedWeekly = [...weeklyContent, ...weeklyContentYear2, ...weeklyContentYear3];

export function useCmsLesson(lessonId: string | undefined) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [weeklyLesson, setWeeklyLesson] = useState<WeeklyLesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!lessonId) return;
    loadContent(lessonId);
  }, [lessonId]);

  const loadContent = async (id: string) => {
    setLoading(true);
    try {
      // Try DB first
      const [lessonRes, dailyRes, quizRes, projectRes] = await Promise.all([
        supabase.from('cms_lessons' as any).select('*').eq('id', id).single(),
        supabase.from('cms_daily_content' as any).select('*').eq('lesson_id', id).order('day_number'),
        supabase.from('cms_quiz_questions' as any).select('*').eq('lesson_id', id).order('sort_order'),
        supabase.from('cms_projects' as any).select('*').eq('lesson_id', id).limit(1),
      ]);

      if (lessonRes.data) {
        const db = lessonRes.data as any;
        // Convert DB format to Lesson format
        const dbLesson: Lesson = {
          id: db.id,
          titleKey: db.id,
          icon: db.icon,
          content: {
            en: { title: db.title_en, definition: db.definition_en, explanation: db.explanation_en, summary: db.summary_en },
            ar: { title: db.title_ar, definition: db.definition_ar, explanation: db.explanation_ar, summary: db.summary_ar },
          },
          quiz: { en: [], ar: [] },
        };

        // Add quiz questions
        if (quizRes.data && (quizRes.data as any[]).length > 0) {
          dbLesson.quiz = {
            en: (quizRes.data as any[]).map(q => ({ question: q.question_en, options: q.options_en, correctAnswer: q.correct_answer })),
            ar: (quizRes.data as any[]).map(q => ({ question: q.question_ar, options: q.options_ar, correctAnswer: q.correct_answer })),
          };
        }

        setLesson(dbLesson);

        // Build weekly content from DB
        if (dailyRes.data && (dailyRes.data as any[]).length > 0) {
          const days: DailyContent[] = (dailyRes.data as any[]).map(d => {
            const day: DailyContent = {
              day: d.day_number,
              type: d.type as 'learning' | 'quiz' | 'project',
              content: {
                en: {
                  title: d.title_en,
                  explanation: d.explanation_en,
                  keyTerms: d.key_terms_en || [],
                  practiceQuestion: d.practice_question_en || undefined,
                },
                ar: {
                  title: d.title_ar,
                  explanation: d.explanation_ar,
                  keyTerms: d.key_terms_ar || [],
                  practiceQuestion: d.practice_question_ar || undefined,
                },
              },
            };

            // Add quiz for Day 6
            if (d.type === 'quiz' && dbLesson.quiz.en.length > 0) {
              day.quiz = dbLesson.quiz;
            }

            // Add project for Day 7
            if (d.type === 'project' && projectRes.data && (projectRes.data as any[]).length > 0) {
              const p = (projectRes.data as any[])[0];
              day.project = {
                en: {
                  title: p.title_en,
                  description: p.description_en,
                  instructions: p.instructions_en || [],
                  submissionType: p.submission_type as 'text' | 'image' | 'both',
                },
                ar: {
                  title: p.title_ar,
                  description: p.description_ar,
                  instructions: p.instructions_ar || [],
                  submissionType: p.submission_type as 'text' | 'image' | 'both',
                },
              };
            }

            return day;
          });

          setWeeklyLesson({ lessonId: id, days });
        } else {
          // Fallback to hardcoded weekly
          setWeeklyLesson(allHardcodedWeekly.find(w => w.lessonId === id) || null);
        }
      } else {
        // Fallback to hardcoded
        setLesson(allHardcodedLessons.find(l => l.id === id) || null);
        setWeeklyLesson(allHardcodedWeekly.find(w => w.lessonId === id) || null);
      }
    } catch {
      // Fallback to hardcoded on any error
      setLesson(allHardcodedLessons.find(l => l.id === id) || null);
      setWeeklyLesson(allHardcodedWeekly.find(w => w.lessonId === id) || null);
    }
    setLoading(false);
  };

  return { lesson, weeklyLesson, loading };
}
