export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      cms_daily_content: {
        Row: {
          day_number: number
          explanation_ar: string | null
          explanation_en: string | null
          id: string
          key_terms_ar: Json | null
          key_terms_en: Json | null
          lesson_id: string
          practice_question_ar: Json | null
          practice_question_en: Json | null
          title_ar: string | null
          title_en: string | null
          type: string
        }
        Insert: {
          day_number: number
          explanation_ar?: string | null
          explanation_en?: string | null
          id?: string
          key_terms_ar?: Json | null
          key_terms_en?: Json | null
          lesson_id: string
          practice_question_ar?: Json | null
          practice_question_en?: Json | null
          title_ar?: string | null
          title_en?: string | null
          type?: string
        }
        Update: {
          day_number?: number
          explanation_ar?: string | null
          explanation_en?: string | null
          id?: string
          key_terms_ar?: Json | null
          key_terms_en?: Json | null
          lesson_id?: string
          practice_question_ar?: Json | null
          practice_question_en?: Json | null
          title_ar?: string | null
          title_en?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "cms_daily_content_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "cms_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_lessons: {
        Row: {
          created_at: string | null
          definition_ar: string | null
          definition_en: string | null
          explanation_ar: string | null
          explanation_en: string | null
          icon: string | null
          id: string
          level: number
          sort_order: number
          summary_ar: string | null
          summary_en: string | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          definition_ar?: string | null
          definition_en?: string | null
          explanation_ar?: string | null
          explanation_en?: string | null
          icon?: string | null
          id: string
          level?: number
          sort_order?: number
          summary_ar?: string | null
          summary_en?: string | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          definition_ar?: string | null
          definition_en?: string | null
          explanation_ar?: string | null
          explanation_en?: string | null
          icon?: string | null
          id?: string
          level?: number
          sort_order?: number
          summary_ar?: string | null
          summary_en?: string | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      cms_projects: {
        Row: {
          description_ar: string | null
          description_en: string | null
          id: string
          instructions_ar: Json | null
          instructions_en: Json | null
          lesson_id: string
          submission_type: string | null
          title_ar: string | null
          title_en: string | null
        }
        Insert: {
          description_ar?: string | null
          description_en?: string | null
          id?: string
          instructions_ar?: Json | null
          instructions_en?: Json | null
          lesson_id: string
          submission_type?: string | null
          title_ar?: string | null
          title_en?: string | null
        }
        Update: {
          description_ar?: string | null
          description_en?: string | null
          id?: string
          instructions_ar?: Json | null
          instructions_en?: Json | null
          lesson_id?: string
          submission_type?: string | null
          title_ar?: string | null
          title_en?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cms_projects_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "cms_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_quiz_questions: {
        Row: {
          correct_answer: number
          id: string
          lesson_id: string
          options_ar: Json
          options_en: Json
          question_ar: string
          question_en: string
          sort_order: number | null
        }
        Insert: {
          correct_answer?: number
          id?: string
          lesson_id: string
          options_ar?: Json
          options_en?: Json
          question_ar?: string
          question_en?: string
          sort_order?: number | null
        }
        Update: {
          correct_answer?: number
          id?: string
          lesson_id?: string
          options_ar?: Json
          options_en?: Json
          question_ar?: string
          question_en?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cms_quiz_questions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "cms_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          current_year: number | null
          full_name: string | null
          id: string
          preferred_language: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_year?: number | null
          full_name?: string | null
          id: string
          preferred_language?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_year?: number | null
          full_name?: string | null
          id?: string
          preferred_language?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      project_submissions: {
        Row: {
          content: string | null
          created_at: string
          id: string
          image_url: string | null
          lesson_id: string
          submitted_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          lesson_id: string
          submitted_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          lesson_id?: string
          submitted_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress: {
        Row: {
          completed: boolean
          created_at: string
          day_number: number
          id: string
          lesson_id: string
          score: number | null
          submitted_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          day_number: number
          id?: string
          lesson_id: string
          score?: number | null
          submitted_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          day_number?: number
          id?: string
          lesson_id?: string
          score?: number | null
          submitted_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
