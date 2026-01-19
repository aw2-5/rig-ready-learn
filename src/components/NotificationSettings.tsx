import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bell, BellOff, Clock } from 'lucide-react';
import { toast } from 'sonner';
import {
  requestNotificationPermission,
  isNotificationEnabled,
  setNotificationEnabled,
  getNotificationSettings,
  setReminderTime,
  showNotification,
  getDailyMotivation
} from '@/lib/notificationService';

export function NotificationSettings() {
  const { language } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const [time, setTime] = useState('20:00');
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const settings = getNotificationSettings();
    setEnabled(settings.enabled);
    setTime(settings.time);
    setPermissionGranted(Notification.permission === 'granted');
  }, []);

  const handleToggle = async (checked: boolean) => {
    if (checked) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setEnabled(true);
        setNotificationEnabled(true);
        setPermissionGranted(true);
        toast.success(
          language === 'ar' 
            ? 'تم تفعيل التذكيرات اليومية!' 
            : 'Daily reminders enabled!'
        );
        // Show a test notification
        setTimeout(() => {
          showNotification(
            language === 'ar' ? '✅ تم التفعيل!' : '✅ Enabled!',
            getDailyMotivation(language)
          );
        }, 1000);
      } else {
        toast.error(
          language === 'ar' 
            ? 'لم يتم منح الإذن للإشعارات' 
            : 'Notification permission not granted'
        );
      }
    } else {
      setEnabled(false);
      setNotificationEnabled(false);
      toast.info(
        language === 'ar' 
          ? 'تم إيقاف التذكيرات اليومية' 
          : 'Daily reminders disabled'
      );
    }
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    setReminderTime(newTime);
    if (enabled) {
      toast.success(
        language === 'ar' 
          ? `تم تغيير وقت التذكير إلى ${newTime}` 
          : `Reminder time set to ${newTime}`
      );
    }
  };

  const handleTestNotification = () => {
    showNotification(
      language === 'ar' ? '🔔 تذكير تجريبي' : '🔔 Test Notification',
      getDailyMotivation(language)
    );
  };

  return (
    <Card className="animate-fade-in">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${enabled ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center`}>
              {enabled ? (
                <Bell className="w-5 h-5 text-primary" />
              ) : (
                <BellOff className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
            <div>
              <p className="font-medium text-foreground">
                {language === 'ar' ? 'التذكيرات اليومية' : 'Daily Reminders'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'ar' 
                  ? 'احصل على تذكير يومي للدراسة' 
                  : 'Get reminded to study daily'
                }
              </p>
            </div>
          </div>
          <Switch
            checked={enabled}
            onCheckedChange={handleToggle}
          />
        </div>

        {enabled && (
          <>
            <div className="flex items-center gap-3 pt-2 border-t">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  {language === 'ar' ? 'وقت التذكير' : 'Reminder Time'}
                </p>
              </div>
              <input
                type="time"
                value={time}
                onChange={(e) => handleTimeChange(e.target.value)}
                className="bg-background border rounded-md px-3 py-1 text-sm"
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={handleTestNotification}
            >
              {language === 'ar' ? 'إرسال إشعار تجريبي' : 'Send Test Notification'}
            </Button>
          </>
        )}

        {!permissionGranted && 'Notification' in window && (
          <p className="text-xs text-amber-600 dark:text-amber-400">
            {language === 'ar' 
              ? '⚠️ يجب السماح بالإشعارات من إعدادات المتصفح' 
              : '⚠️ Please allow notifications in browser settings'
            }
          </p>
        )}
      </CardContent>
    </Card>
  );
}
