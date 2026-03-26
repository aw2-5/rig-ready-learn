

## تشخيص وحل مشكلة الشاشة البيضاء

### المشكلة
مستخدم يواجه:
1. يظهر له "aw2_5@" (هذا جزء من الإيميل قبل @) على صفحة Home
2. بعدها شاشة بيضاء — يعني خطأ JavaScript يوقف التطبيق

### السبب المحتمل
النص "aw2_5@" يظهر في صفحة Home (سطر 410) اللي تعرض `user?.email?.split('@')[0]`. الشاشة البيضاء تعني إن أحد الـ components يرمي خطأ ويوقف كل الصفحة لأن ما عندنا Error Boundary.

### الحل

**1. إضافة Error Boundary عام**
- إنشاء `src/components/ErrorBoundary.tsx` — يلتقط أي خطأ JavaScript ويعرض رسالة ودية بدل شاشة بيضاء مع زر "إعادة المحاولة"
- لف التطبيق كامل بيه في `App.tsx`

**2. إضافة Error Boundary للصفحة الرئيسية**
- لف الـ components اللي ممكن تسبب مشاكل (DailyStreak, DailyChallenges, SpeedQuiz) بـ error boundaries فردية حتى لو واحد يطيح الباقي يشتغل

**3. حماية useCmsContent من الأخطاء**
- التأكد من أن أخطاء جداول CMS ما توقف التطبيق (الـ catch موجود بس نحتاج نتأكد إنه يشتغل صح مع الـ `as any` casting)

**4. إضافة console.log للتشخيص**
- إضافة logging في Home.tsx و AuthContext لمعرفة وين بالضبط يصير الخطأ عند هذا المستخدم

### التفاصيل التقنية

**ErrorBoundary.tsx:**
```tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error, info) { console.error('App Error:', error, info) }
  // يعرض زر إعادة تحميل الصفحة
}
```

**App.tsx:** لف `<BrowserRouter>` بـ `<ErrorBoundary>`

**Home.tsx:** لف DailyStreak, DailyChallenges, SpeedQuiz بـ try-catch wrappers (error boundaries فردية صغيرة)

### الملفات المتأثرة
- `src/components/ErrorBoundary.tsx` (جديد)
- `src/App.tsx` (إضافة ErrorBoundary)
- `src/pages/Home.tsx` (حماية components فردية)

