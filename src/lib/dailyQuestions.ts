// Daily activation questions by level for notifications

export interface DailyQuestion {
  ar: string;
  en: string;
}

export const level1Questions: DailyQuestion[] = [
  { ar: "ما هي أنواع منصات الحفر الرئيسية؟", en: "What are the main types of drilling rigs?" },
  { ar: "ما الفرق بين الآبار العمودية والأفقية؟", en: "What's the difference between vertical and horizontal wells?" },
  { ar: "ما هي المكونات الأساسية لجهاز الحفر؟", en: "What are the basic components of a drilling rig?" },
  { ar: "ما هو سائل الحفر ولماذا نستخدمه؟", en: "What is drilling fluid and why do we use it?" },
  { ar: "كيف يتم قياس عمق البئر؟", en: "How is well depth measured?" },
  { ar: "ما هي وظيفة رأس الحفر؟", en: "What is the function of the drill bit?" },
  { ar: "ما معنى ROP في الحفر؟", en: "What does ROP mean in drilling?" },
];

export const level2Questions: DailyQuestion[] = [
  { ar: "ما هو الفرق بين WOB و RPM؟", en: "What's the difference between WOB and RPM?" },
  { ar: "كيف يعمل نظام BOP؟", en: "How does the BOP system work?" },
  { ar: "ما هي أنواع سوائل الحفر المتقدمة؟", en: "What are the types of advanced drilling fluids?" },
  { ar: "كيف يتم حساب ضغط ECD؟", en: "How is ECD pressure calculated?" },
  { ar: "ما هي تقنيات الحفر الموجه؟", en: "What are directional drilling techniques?" },
  { ar: "كيف يتم اكتشاف التدفق؟", en: "How is a kick detected?" },
  { ar: "ما هي معادلة الهيدروليكا؟", en: "What is the hydraulics equation?" },
];

export const level3Questions: DailyQuestion[] = [
  { ar: "ما هو الفرق بين MPD و UBD؟", en: "What's the difference between MPD and UBD?" },
  { ar: "كيف يعمل نظام RSS؟", en: "How does the RSS system work?" },
  { ar: "ما هي تحديات الحفر HPHT؟", en: "What are HPHT drilling challenges?" },
  { ar: "كيف يتم تحسين MSE؟", en: "How is MSE optimized?" },
  { ar: "ما هي تقنيات منع الالتصاق؟", en: "What are stuck pipe prevention techniques?" },
  { ar: "كيف يعمل نظام MWD/LWD؟", en: "How do MWD/LWD systems work?" },
  { ar: "ما هي اعتبارات استقرار جدار البئر؟", en: "What are wellbore stability considerations?" },
];

export function getDailyQuestion(level: number, language: 'en' | 'ar'): string {
  const questions = level === 1 ? level1Questions : level === 2 ? level2Questions : level3Questions;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % questions.length;
  return questions[index][language];
}

export function getQuestionForNotification(userLevel: number, language: 'en' | 'ar'): { title: string; body: string } {
  const question = getDailyQuestion(userLevel, language);
  
  return {
    title: language === 'ar' ? '🎯 سؤال اليوم' : '🎯 Daily Question',
    body: question
  };
}
