
-- Admin check function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    lower(auth.jwt()->>'email') IN (
      'awsalnoimy25@gmail.com',
      'aws.23pm57@student.uomosul.edu.iq'
    ),
    false
  )
$$;

-- CMS Lessons table
CREATE TABLE public.cms_lessons (
  id text PRIMARY KEY,
  icon text DEFAULT '📘',
  level integer NOT NULL DEFAULT 1,
  sort_order integer NOT NULL DEFAULT 0,
  title_en text NOT NULL DEFAULT '',
  title_ar text NOT NULL DEFAULT '',
  definition_en text DEFAULT '',
  definition_ar text DEFAULT '',
  explanation_en text DEFAULT '',
  explanation_ar text DEFAULT '',
  summary_en text DEFAULT '',
  summary_ar text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.cms_lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read lessons" ON public.cms_lessons FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert lessons" ON public.cms_lessons FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update lessons" ON public.cms_lessons FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete lessons" ON public.cms_lessons FOR DELETE TO authenticated USING (public.is_admin());

-- CMS Daily Content table
CREATE TABLE public.cms_daily_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id text NOT NULL REFERENCES public.cms_lessons(id) ON DELETE CASCADE,
  day_number integer NOT NULL,
  type text NOT NULL DEFAULT 'learning',
  title_en text DEFAULT '',
  title_ar text DEFAULT '',
  explanation_en text DEFAULT '',
  explanation_ar text DEFAULT '',
  key_terms_en jsonb DEFAULT '[]',
  key_terms_ar jsonb DEFAULT '[]',
  practice_question_en jsonb,
  practice_question_ar jsonb,
  UNIQUE(lesson_id, day_number)
);

ALTER TABLE public.cms_daily_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read daily content" ON public.cms_daily_content FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert daily content" ON public.cms_daily_content FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update daily content" ON public.cms_daily_content FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete daily content" ON public.cms_daily_content FOR DELETE TO authenticated USING (public.is_admin());

-- CMS Quiz Questions table (Day 6 quiz)
CREATE TABLE public.cms_quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id text NOT NULL REFERENCES public.cms_lessons(id) ON DELETE CASCADE,
  question_en text NOT NULL DEFAULT '',
  question_ar text NOT NULL DEFAULT '',
  options_en jsonb NOT NULL DEFAULT '[]',
  options_ar jsonb NOT NULL DEFAULT '[]',
  correct_answer integer NOT NULL DEFAULT 0,
  sort_order integer DEFAULT 0
);

ALTER TABLE public.cms_quiz_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read quiz questions" ON public.cms_quiz_questions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert quiz questions" ON public.cms_quiz_questions FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update quiz questions" ON public.cms_quiz_questions FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete quiz questions" ON public.cms_quiz_questions FOR DELETE TO authenticated USING (public.is_admin());

-- CMS Projects table (Day 7 project)
CREATE TABLE public.cms_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id text NOT NULL REFERENCES public.cms_lessons(id) ON DELETE CASCADE,
  title_en text DEFAULT '',
  title_ar text DEFAULT '',
  description_en text DEFAULT '',
  description_ar text DEFAULT '',
  instructions_en jsonb DEFAULT '[]',
  instructions_ar jsonb DEFAULT '[]',
  submission_type text DEFAULT 'text'
);

ALTER TABLE public.cms_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read projects" ON public.cms_projects FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert projects" ON public.cms_projects FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update projects" ON public.cms_projects FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete projects" ON public.cms_projects FOR DELETE TO authenticated USING (public.is_admin());

-- Storage bucket for lesson images
INSERT INTO storage.buckets (id, name, public) VALUES ('lesson-images', 'lesson-images', true);

CREATE POLICY "Anyone can view lesson images" ON storage.objects FOR SELECT USING (bucket_id = 'lesson-images');
CREATE POLICY "Admins can upload lesson images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'lesson-images' AND public.is_admin());
CREATE POLICY "Admins can update lesson images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'lesson-images' AND public.is_admin());
CREATE POLICY "Admins can delete lesson images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'lesson-images' AND public.is_admin());

-- Update trigger for cms_lessons
CREATE TRIGGER update_cms_lessons_updated_at
  BEFORE UPDATE ON public.cms_lessons
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
