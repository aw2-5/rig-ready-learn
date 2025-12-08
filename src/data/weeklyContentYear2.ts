import { QuizQuestion } from './lessons';
import { DailyContent, WeeklyLesson } from './weeklyContent';

// Helper function to create placeholder weekly content for Year 2 lessons
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
<h2 class="text-primary text-xl font-bold mb-4">🔷 مقدمة</h2>
<p class="mb-4">محتوى اليوم الأول لدرس ${titleAr} سيتم إضافته قريباً. يرجى العودة لاحقاً للاطلاع على المحتوى التفصيلي.</p>
<div class="bg-secondary/50 p-4 rounded-lg mt-4">
<p>هذا الدرس جزء من المستوى الثاني في هندسة الحفر.</p>
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
<h2 class="text-primary text-xl font-bold mb-4">🔷 Introduction</h2>
<p class="mb-4">Day 1 content for ${titleEn} will be added soon. Please check back later for detailed content.</p>
<div class="bg-secondary/50 p-4 rounded-lg mt-4">
<p>This lesson is part of Level 2 in Drilling Engineering.</p>
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
<h2 class="text-primary text-xl font-bold mb-4">🔷 المحتوى</h2>
<p class="mb-4">محتوى اليوم الثاني سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [
            { term: 'مصطلح 3', definition: 'تعريف المصطلح سيتم إضافته' },
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
<h2 class="text-primary text-xl font-bold mb-4">🔷 Content</h2>
<p class="mb-4">Day 2 content will be added soon.</p>
</section>`,
          keyTerms: [
            { term: 'Term 3', definition: 'Definition will be added' },
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
<h2 class="text-primary text-xl font-bold mb-4">🔷 المحتوى</h2>
<p class="mb-4">محتوى اليوم الثالث سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [
            { term: 'مصطلح 4', definition: 'تعريف المصطلح سيتم إضافته' },
          ],
          practiceQuestion: {
            question: 'سؤال تدريبي؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 3`,
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Content</h2>
<p class="mb-4">Day 3 content will be added soon.</p>
</section>`,
          keyTerms: [
            { term: 'Term 4', definition: 'Definition will be added' },
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
      day: 4,
      type: 'learning',
      content: {
        ar: {
          title: `${titleAr} - اليوم الرابع`,
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 المحتوى</h2>
<p class="mb-4">محتوى اليوم الرابع سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [
            { term: 'مصطلح 5', definition: 'تعريف المصطلح سيتم إضافته' },
          ],
          practiceQuestion: {
            question: 'سؤال تدريبي؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 4`,
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Content</h2>
<p class="mb-4">Day 4 content will be added soon.</p>
</section>`,
          keyTerms: [
            { term: 'Term 5', definition: 'Definition will be added' },
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
      day: 5,
      type: 'learning',
      content: {
        ar: {
          title: `${titleAr} - اليوم الخامس`,
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 المحتوى</h2>
<p class="mb-4">محتوى اليوم الخامس سيتم إضافته قريباً.</p>
</section>`,
          keyTerms: [
            { term: 'مصطلح 6', definition: 'تعريف المصطلح سيتم إضافته' },
          ],
          practiceQuestion: {
            question: 'سؤال تدريبي؟',
            options: ['الخيار أ', 'الخيار ب', 'الخيار ج', 'الخيار د'],
            correctAnswer: 0,
          },
        },
        en: {
          title: `${titleEn} - Day 5`,
          explanation: `<section>
<h2 class="text-primary text-xl font-bold mb-4">🔷 Content</h2>
<p class="mb-4">Day 5 content will be added soon.</p>
</section>`,
          keyTerms: [
            { term: 'Term 6', definition: 'Definition will be added' },
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
      day: 6,
      type: 'quiz',
      content: {
        ar: {
          title: `اختبار ${titleAr}`,
          explanation: 'اختبر معلوماتك في هذا الدرس',
          keyTerms: [],
        },
        en: {
          title: `${titleEn} Quiz`,
          explanation: 'Test your knowledge on this lesson',
          keyTerms: [],
        },
      },
      quiz: {
        ar: [
          { question: 'سؤال الاختبار 1؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 2؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 3؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 4؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 5؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 6؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 7؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 8؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 9؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
          { question: 'سؤال الاختبار 10؟', options: ['أ', 'ب', 'ج', 'د'], correctAnswer: 0 },
        ],
        en: [
          { question: 'Quiz question 1?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 2?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 3?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 4?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 5?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 6?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 7?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 8?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 9?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
          { question: 'Quiz question 10?', options: ['A', 'B', 'C', 'D'], correctAnswer: 0 },
        ],
      },
    },
    {
      day: 7,
      type: 'project',
      content: {
        ar: {
          title: `مشروع ${titleAr}`,
          explanation: 'طبق ما تعلمته في هذا المشروع',
          keyTerms: [],
        },
        en: {
          title: `${titleEn} Project`,
          explanation: 'Apply what you learned in this project',
          keyTerms: [],
        },
      },
      project: {
        ar: {
          title: `مشروع ${titleAr}`,
          description: 'مشروع تطبيقي سيتم إضافة تفاصيله قريباً.',
          instructions: [
            'راجع محتوى الأيام السابقة',
            'اكتب تقريراً مختصراً عما تعلمته',
            'أضف أمثلة من الواقع العملي',
          ],
          submissionType: 'text',
        },
        en: {
          title: `${titleEn} Project`,
          description: 'Applied project details will be added soon.',
          instructions: [
            'Review the content from previous days',
            'Write a brief report on what you learned',
            'Add real-world practical examples',
          ],
          submissionType: 'text',
        },
      },
    },
  ],
});

// Create placeholder lessons for all Year 2 content
export const weeklyContentYear2: WeeklyLesson[] = [
  createPlaceholderLesson('hoisting-advanced', 'نظام الرفع المتقدم', 'Hoisting System – Advanced'),
  createPlaceholderLesson('rotary-systems', 'أنظمة الدوران', 'Rotary Systems'),
  createPlaceholderLesson('drillstring-bha', 'تصميم سلسلة الحفر و BHA', 'Drill String & BHA Design'),
  createPlaceholderLesson('drill-bits-advanced', 'رؤوس الحفر المتقدم', 'Drill Bits – Advanced'),
  createPlaceholderLesson('bop-systems', 'أنظمة مانع الانفجار والاختبار', 'BOP Systems & Testing'),
  createPlaceholderLesson('drilling-fluids-2', 'سوائل الحفر - المستوى 2', 'Drilling Fluids – Level 2'),
  createPlaceholderLesson('hydraulics-flow', 'الهيدروليكا وتدفق سلسلة الحفر', 'Hydraulics & Drillstring Flow'),
  createPlaceholderLesson('hole-cleaning', 'تنظيف الحفرة ومعالجة الفتات', 'Hole Cleaning & Cuttings Handling'),
  createPlaceholderLesson('pressure-ecd', 'حسابات الضغط و ECD', 'Pressure & ECD Calculations'),
  createPlaceholderLesson('kick-detection', 'كشف الكيك وإجراءات التحكم بالبئر', 'Kick Detection & Well Control Procedures'),
  createPlaceholderLesson('casing-cementing', 'التغليف والتسميت وضمان الجودة', 'Casing, Cementing & QA/QC'),
  createPlaceholderLesson('drilling-problems', 'مشاكل الحفر والإجراءات العلاجية', 'Drilling Problems & Remedial Actions'),
  createPlaceholderLesson('directional-drilling', 'الحفر الموجه والأفقي', 'Directional & Horizontal Drilling'),
];
