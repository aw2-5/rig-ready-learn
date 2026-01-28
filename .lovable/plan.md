
# خطة إضافة دعم Speed Quiz للمستويات 2 و 3 + تأثيرات صوتية وحركية

## ملخص التغييرات

سأقوم بتنفيذ تحسينين رئيسيين:
1. **توسيع Speed Quiz** ليشمل أسئلة من المستوى الثاني والثالث
2. **إضافة تأثيرات ترفيهية** (كونفيتي وأصوات) عند الإجابة الصحيحة وإكمال التحديات

---

## الجزء الأول: دعم Speed Quiz للمستويات 2 و 3

### المشكلة الحالية
الكود الحالي في `Home.tsx` (السطر 217-236) يأخذ الأسئلة فقط من `weeklyContent` (المستوى الأول):

```text
if (selectedYear === 1) {
  weeklyContent.forEach((lessonContent) => {
    // جلب الأسئلة من المستوى الأول فقط
  });
}
```

### الحل
تعديل منطق جلب الأسئلة ليشمل المستويات الثلاثة:

| المستوى | مصدر البيانات |
|---------|---------------|
| Level 1 | `weeklyContent` (14 درس) |
| Level 2 | `weeklyContentYear2` (13 درس) |
| Level 3 | `weeklyContentYear3` (20 درس) |

### التغييرات المطلوبة

**ملف: `src/pages/Home.tsx`**
- إضافة import لـ `weeklyContentYear2` و `weeklyContentYear3`
- تحديث `useMemo` لجلب الأسئلة حسب المستوى المحدد

---

## الجزء الثاني: تأثيرات صوتية وحركية

### المكتبة المقترحة
**canvas-confetti** - مكتبة خفيفة وسهلة الاستخدام للرسوم المتحركة confetti

### مواقع التأثيرات

| الموقع | النوع | الوصف |
|--------|-------|-------|
| Speed Quiz - إجابة صحيحة | كونفيتي صغير + صوت | تحفيز فوري |
| Speed Quiz - إنهاء الاختبار | كونفيتي كبير | احتفال بالإنجاز |
| Daily Challenge - إكمال | كونفيتي + صوت | مكافأة إكمال التحدي |
| Streak - شارة جديدة | كونفيتي | تهنئة بالإنجاز |

### ملفات جديدة

**1. `src/lib/sounds.ts`**
- وظائف تشغيل الأصوات باستخدام Web Audio API
- أصوات قصيرة: نجاح، خطأ، إنجاز

**2. `src/lib/confetti.ts`**
- وظائف إطلاق الكونفيتي بأشكال مختلفة
- burst صغير للإجابات الصحيحة
- celebration كبير للإنجازات

### التغييرات في الملفات الموجودة

| الملف | التغيير |
|-------|---------|
| `src/components/SpeedQuiz.tsx` | إضافة كونفيتي وصوت للإجابات الصحيحة + شاشة النهاية |
| `src/components/DailyChallenges.tsx` | كونفيتي عند إكمال التحدي |
| `src/components/DailyStreak.tsx` | كونفيتي عند تحقيق شارة جديدة |

---

## التفاصيل التقنية

### 1. هيكل ملف الأصوات (`src/lib/sounds.ts`)

```text
الوظائف المتاحة:
- playCorrectSound(): صوت قصير للإجابة الصحيحة
- playWrongSound(): صوت قصير للإجابة الخاطئة  
- playAchievementSound(): صوت احتفالي للإنجازات
- playClickSound(): صوت نقرة خفيف

المميزات:
- استخدام Web Audio API (بدون ملفات صوتية خارجية)
- التحكم في مستوى الصوت
- دعم كتم الصوت
```

### 2. هيكل ملف الكونفيتي (`src/lib/confetti.ts`)

```text
الوظائف المتاحة:
- correctAnswerConfetti(): burst صغير من الكونفيتي
- challengeCompleteConfetti(): احتفال متوسط
- bigCelebration(): احتفال كبير (إنهاء الاختبار)

المميزات:
- ألوان متناسقة مع الثيم
- حجم قابل للتخصيص
- موقع قابل للتحديد (مركز الشاشة أو موقع معين)
```

### 3. تحديث Speed Quiz

```text
التغييرات:
1. Import من confetti و sounds
2. عند الإجابة الصحيحة (handleAnswer):
   - playCorrectSound()
   - correctAnswerConfetti()
3. عند الإجابة الخاطئة:
   - playWrongSound()
4. عند إنهاء الاختبار (isFinished):
   - playAchievementSound()
   - bigCelebration()
```

### 4. تحديث جلب أسئلة Speed Quiz

```text
speedQuizQuestions = useMemo(() => {
  const questions = [];
  
  // تحديد مصدر البيانات حسب المستوى
  const contentSource = 
    selectedYear === 1 ? weeklyContent :
    selectedYear === 2 ? weeklyContentYear2 :
    weeklyContentYear3;
  
  // جلب الأسئلة من كل الدروس
  contentSource.forEach((lessonContent) => {
    // نفس المنطق الحالي
  });
  
  return shuffled.slice(0, 10);
}, [selectedYear, language]);
```

---

## ترتيب التنفيذ

1. إنشاء `src/lib/sounds.ts` - نظام الأصوات
2. إنشاء `src/lib/confetti.ts` - نظام الكونفيتي
3. تحديث `src/pages/Home.tsx` - دعم المستويات الثلاثة
4. تحديث `src/components/SpeedQuiz.tsx` - إضافة التأثيرات
5. تحديث `src/components/DailyChallenges.tsx` - كونفيتي الإكمال
6. تحديث `src/components/DailyStreak.tsx` - كونفيتي الشارات

---

## ملاحظات مهمة

- الأصوات ستكون اختيارية مع إمكانية كتمها
- الكونفيتي لن يؤثر على أداء التطبيق (canvas-confetti خفيفة جداً)
- التأثيرات ستعمل على جميع الأجهزة (desktop و mobile)
- لا تحتاج أي ملفات صوتية خارجية (Web Audio API يولد الأصوات)
