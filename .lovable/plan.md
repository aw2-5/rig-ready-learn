
# تحديث الدومين إلى drilla-z.com

## الملفات المطلوب تحديثها

### 1. `public/sitemap.xml`
تغيير كل الروابط من `https://drilla-z.lovable.app` إلى `https://drilla-z.com`

### 2. `public/robots.txt`
تغيير رابط الـ Sitemap من `https://drilla-z.lovable.app/sitemap.xml` إلى `https://drilla-z.com/sitemap.xml`

### 3. `index.html`
تغيير الـ canonical URL من `https://drilla-z.lovable.app/` إلى `https://drilla-z.com/`

### 4. `src/components/SEOHead.tsx`
تغيير الرابط الافتراضي للـ image و url من `https://drilla-z.lovable.app` إلى `https://drilla-z.com`

## ملاحظة مهمة عن DNS
رسالة عدم اكتشاف DNS طبيعية - الانتشار يأخذ من دقائق إلى 72 ساعة. تأكد من:
- A Record لـ @ يشير إلى 185.158.133.1
- A Record لـ www يشير إلى 185.158.133.1
- TXT Record لـ _lovable بالقيمة الصحيحة من إعدادات المشروع

---

## التفاصيل التقنية

4 ملفات تحتاج تعديل بسيط - استبدال `drilla-z.lovable.app` بـ `drilla-z.com` في كل مكان.
