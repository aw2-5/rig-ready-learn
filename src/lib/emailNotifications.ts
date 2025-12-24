import { supabase } from '@/integrations/supabase/client';

interface SendLevelCompletionEmailParams {
  email: string;
  userName: string;
  level: number;
  averageScore?: number;
  language: 'en' | 'ar';
}

export async function sendLevelCompletionEmail(params: SendLevelCompletionEmailParams): Promise<boolean> {
  try {
    console.log('Sending level completion email:', params);
    
    const { data, error } = await supabase.functions.invoke('send-level-completion', {
      body: params,
    });

    if (error) {
      console.error('Error sending level completion email:', error);
      return false;
    }

    console.log('Level completion email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Failed to send level completion email:', error);
    return false;
  }
}
