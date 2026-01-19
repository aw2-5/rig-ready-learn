// Notification Service for daily study reminders

const NOTIFICATION_KEY = 'study-reminder-enabled';
const LAST_REMINDER_KEY = 'last-reminder-date';

export interface NotificationSettings {
  enabled: boolean;
  time: string; // HH:MM format
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
}

export function isNotificationEnabled(): boolean {
  return localStorage.getItem(NOTIFICATION_KEY) === 'true';
}

export function setNotificationEnabled(enabled: boolean): void {
  localStorage.setItem(NOTIFICATION_KEY, enabled ? 'true' : 'false');
}

export function getNotificationSettings(): NotificationSettings {
  return {
    enabled: isNotificationEnabled(),
    time: localStorage.getItem('reminder-time') || '20:00'
  };
}

export function setReminderTime(time: string): void {
  localStorage.setItem('reminder-time', time);
}

export function showNotification(title: string, body: string, icon?: string): void {
  if (!('Notification' in window) || Notification.permission !== 'granted') {
    return;
  }

  const options: NotificationOptions = {
    body,
    icon: icon || '/favicon.png',
    badge: '/favicon.png',
    tag: 'study-reminder',
    requireInteraction: false
  };

  try {
    new Notification(title, options);
  } catch (error) {
    // Fallback for mobile using service worker
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, options);
      });
    }
  }
}

export function scheduleStudyReminder(language: 'en' | 'ar' = 'en'): void {
  const settings = getNotificationSettings();
  if (!settings.enabled) return;

  const now = new Date();
  const today = now.toDateString();
  const lastReminder = localStorage.getItem(LAST_REMINDER_KEY);

  // Only show one reminder per day
  if (lastReminder === today) return;

  const [hours, minutes] = settings.time.split(':').map(Number);
  const reminderTime = new Date();
  reminderTime.setHours(hours, minutes, 0, 0);

  // If current time is past reminder time, show notification
  if (now >= reminderTime) {
    localStorage.setItem(LAST_REMINDER_KEY, today);
    
    const titles = {
      en: '📚 Time to Study!',
      ar: '📚 حان وقت الدراسة!'
    };

    const bodies = {
      en: "Don't break your learning streak! Open Drilla-Z and continue your drilling engineering journey.",
      ar: 'لا تقطع سلسلة تعلمك! افتح Drilla-Z وتابع رحلتك في هندسة الحفر.'
    };

    showNotification(titles[language], bodies[language]);
  }
}

// Check and show reminder on app load
export function initializeNotifications(language: 'en' | 'ar' = 'en'): void {
  if (isNotificationEnabled()) {
    scheduleStudyReminder(language);
    
    // Set up interval to check every hour
    setInterval(() => {
      scheduleStudyReminder(language);
    }, 60 * 60 * 1000); // Check every hour
  }
}

// Daily motivational messages
export function getDailyMotivation(language: 'en' | 'ar' = 'en'): string {
  const motivations = {
    en: [
      "Every expert was once a beginner. Keep going! 💪",
      "Knowledge is the best investment. Study smart! 📈",
      "Today's learning is tomorrow's success. 🌟",
      "Small steps lead to big achievements. 🚀",
      "Your dedication to drilling engineering will pay off! ⛽"
    ],
    ar: [
      "كل خبير كان مبتدئاً يوماً ما. استمر! 💪",
      "المعرفة أفضل استثمار. ادرس بذكاء! 📈",
      "تعلم اليوم هو نجاح الغد. 🌟",
      "الخطوات الصغيرة تؤدي لإنجازات كبيرة. 🚀",
      "تفانيك في هندسة الحفر سيؤتي ثماره! ⛽"
    ]
  };

  const index = new Date().getDate() % motivations[language].length;
  return motivations[language][index];
}
