import { WeeklyLesson } from './weeklyContent';
import { wellControlAdvancedLesson } from './year3/wellControlAdvancedContent';
import { managedPressureDrillingLesson } from './year3/managedPressureDrillingContent';
import { underbalancedDrillingLesson } from './year3/underbalancedDrillingContent';
import { extendedReachDrillingLesson } from './year3/extendedReachDrillingContent';
import { horizontalDrillingLesson } from './year3/horizontalDrillingContent';
import { multilateralWellsLesson } from './year3/multilateralWellsContent';
import { coiledTubingDrillingLesson } from './year3/coiledTubingDrillingContent';
import { fishingOperationsLesson } from './year3/fishingOperationsContent';
import { stuckPipePreventionLesson } from './year3/stuckPipePreventionContent';
import { wellboreStabilityLesson } from './year3/wellboreStabilityContent';
import { drillingOptimizationLesson } from './year3/drillingOptimizationContent';
import { ropOptimizationLesson } from './year3/ropOptimizationContent';
import { mwdLwdSystemsLesson } from './year3/mwdLwdSystemsContent';
import { rotarySteerableSystemsLesson } from './year3/rotarySteerableSystemsContent';
import { drillingAutomationLesson } from './year3/drillingAutomationContent';
import { hphtDrillingLesson } from './year3/hphtDrillingContent';
import { deepwaterDrillingLesson } from './year3/deepwaterDrillingContent';
import { offshoreDrillingSystemsLesson } from './year3/offshoreDrillingSystemsContent';
import { wellIntegrityLesson } from './year3/wellIntegrityContent';
import { hseDrillingLesson } from './year3/hseDrillingContent';

// Helper function to create placeholder weekly content for Year 3 lessons
const createPlaceholderLesson = (lessonId: string, titleAr: string, titleEn: string): WeeklyLesson => ({
  lessonId,
  days: [
    {
      day: 1,
      type: 'learning',
      content: {
        ar: {
          title: `${titleAr} - اليوم الأول`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 مقدمة</h2>
<p style="margin-bottom: 1rem;">محتوى اليوم الأول لدرس ${titleAr} سيتم إضافته قريباً. يرجى العودة لاحقاً للاطلاع على المحتوى التفصيلي.</p>
<div style="background: #f1f5f9; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p>هذا الدرس جزء من المستوى الثالث في هندسة الحفر المتقدمة.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'مصطلح 1', definition: 'تعريف المصطلح سيتم إضافته' },
            { term: 'مصطلح 2', definition: 'تعريف المصطلح سيتم إضافته' },
          ],
          practiceQuestion: {
            question: 'سؤال تدريبي سيتم إضافته؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 1`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 Introduction</h2>
<p style="margin-bottom: 1rem;">Day 1 content for ${titleEn} will be added soon. Please check back later for detailed content.</p>
<div style="background: #f1f5f9; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
<p>This lesson is part of Level 3 in Advanced Drilling Engineering.</p>
</div>
</section>`,
          keyTerms: [
            { term: 'Term 1', definition: 'Definition will be added' },
            { term: 'Term 2', definition: 'Definition will be added' },
          ],
          practiceQuestion: {
            question: 'Practice question will be added?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 2,
      type: 'learning',
      content: {
        ar: {
          title: `${titleAr} - اليوم الثاني`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 المحتوى</h2>
<p style="margin-bottom: 1rem;">محتوى اليوم الثاني سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [
            { term: 'مصطلح', definition: 'تعريف المصطلح سيتم إضافته' },
          ],
          practiceQuestion: {
            question: 'سؤال تدريبي؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 2`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 Content</h2>
<p style="margin-bottom: 1rem;">Day 2 content will be added soon.</p>
</section>`,
          keyTerms: [
            { term: 'Term', definition: 'Definition will be added' },
          ],
          practiceQuestion: {
            question: 'Practice question?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 3,
      type: 'learning',
      content: {
        ar: {
          title: `${titleAr} - اليوم الثالث`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 المحتوى</h2>
<p style="margin-bottom: 1rem;">محتوى اليوم الثالث سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'سؤال تدريبي؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 3`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 Content</h2>
<p style="margin-bottom: 1rem;">Day 3 content will be added soon.</p>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'Practice question?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: `${titleAr} - اليوم الرابع`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 المحتوى</h2>
<p style="margin-bottom: 1rem;">محتوى اليوم الرابع سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'سؤال تدريبي؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 4`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 Content</h2>
<p style="margin-bottom: 1rem;">Day 4 content will be added soon.</p>
</section>`,
          keyTerms: [],
          practiceQuestion: {
            question: 'Practice question?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
          },
        },
      },
    },
    {
      day: 5,
      type: 'quiz',
      content: {
        ar: {
          title: `اختبار ${titleAr}`,
          explanation: 'اختبر معلوماتك',
          keyTerms: [],
        },
        en: {
          title: `${titleEn} Quiz`,
          explanation: 'Test your knowledge',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'سؤال 1؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال 2؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال 3؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال 4؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال 5؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
        ],
        en: [
          { question: 'Question 1?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Question 2?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Question 3?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Question 4?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Question 5?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
        ],
      },
    },
    {
      day: 6,
      type: 'project',
      content: {
        ar: {
          title: `مشروع ${titleAr}`,
          explanation: 'طبق ما تعلمته',
          keyTerms: [],
        },
        en: {
          title: `${titleEn} Project`,
          explanation: 'Apply what you learned',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: `مشروع تطبيقي - ${titleAr}`,
          description: 'قم بتطبيق المفاهيم التي تعلمتها في هذا الأسبوع.',
          instructions: [
            'راجع المفاهيم الأساسية',
            'حلل الحالة المعطاة',
            'قدم توصياتك',
          ],
          submissionType: 'text',
        },
        en: {
          title: `Practical Project - ${titleEn}`,
          description: 'Apply the concepts you learned this week.',
          instructions: [
            'Review the basic concepts',
            'Analyze the given case',
            'Provide your recommendations',
          ],
          submissionType: 'text',
        },
      },
    },
    {
      day: 7,
      type: 'learning',
      content: {
        ar: {
          title: `مراجعة ${titleAr}`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 ملخص الأسبوع</h2>
<p style="margin-bottom: 1rem;">مراجعة شاملة لما تم تعلمه خلال الأسبوع.</p>
</section>`,
          keyTerms: [],
        },
        en: {
          title: `${titleEn} Review`,
          explanation: `<section>
<h2 style="color: #1e3a5f; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">🔷 Week Summary</h2>
<p style="margin-bottom: 1rem;">Comprehensive review of what was learned during the week.</p>
</section>`,
          keyTerms: [],
        },
      },
    },
  ],
});

// Level 3 Weekly Content
export const weeklyContentYear3: WeeklyLesson[] = [
  // Lesson 1: Advanced Well Control (Full Content)
  wellControlAdvancedLesson,
  
  // Lesson 2: Managed Pressure Drilling (Full Content)
  managedPressureDrillingLesson,
  
  // Lesson 3: Underbalanced Drilling (Full Content)
  underbalancedDrillingLesson,
  
  // Lesson 4: Extended Reach Drilling (Full Content)
  extendedReachDrillingLesson,
  
  // Lesson 5: Horizontal Drilling (Full Content)
  horizontalDrillingLesson,
  
  // Lesson 6: Multilateral Wells (Full Content)
  multilateralWellsLesson,
  
  // Lesson 7: Coiled Tubing Drilling (Full Content)
  coiledTubingDrillingLesson,
  
  // Lesson 8-20: Full Content and Placeholders
  fishingOperationsLesson,
  stuckPipePreventionLesson,
  wellboreStabilityLesson,
  drillingOptimizationLesson,
  ropOptimizationLesson,
  mwdLwdSystemsLesson,
  rotarySteerableSystemsLesson,
  drillingAutomationLesson,
  hphtDrillingLesson,
  deepwaterDrillingLesson,
  offshoreDrillingSystemsLesson,
  wellIntegrityLesson,
  hseDrillingLesson,
];

// Helper function to get weekly content by lesson ID
export const getWeeklyContentYear3 = (lessonId: string): WeeklyLesson | undefined => {
  return weeklyContentYear3.find(lesson => lesson.lessonId === lessonId);
};
