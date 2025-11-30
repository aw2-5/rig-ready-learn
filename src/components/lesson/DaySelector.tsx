import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DaySelectorProps {
  currentDay: number;
  onDaySelect: (day: number) => void;
  isDayComplete: (day: number) => boolean;
  getDayScore?: (day: number) => number | undefined;
}

export function DaySelector({ currentDay, onDaySelect, isDayComplete, getDayScore }: DaySelectorProps) {
  const { t, isRTL } = useLanguage();

  const getDayIcon = (day: number) => {
    if (day <= 5) return <BookOpen className="w-3 h-3" />;
    if (day === 6) return <HelpCircle className="w-3 h-3" />;
    return <Lightbulb className="w-3 h-3" />;
  };

  const getDayLabel = (day: number) => {
    if (day === 6) return t('quiz');
    if (day === 7) return t('project');
    return `${t('day')} ${day}`;
  };

  return (
    <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
      {[1, 2, 3, 4, 5, 6, 7].map((day) => {
        const isComplete = isDayComplete(day);
        const isActive = currentDay === day;
        const score = getDayScore?.(day);

        return (
          <button
            key={day}
            onClick={() => onDaySelect(day)}
            className={cn(
              'flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px]',
              isActive
                ? 'bg-accent text-accent-foreground shadow-md scale-105'
                : isComplete
                ? 'bg-green-500/20 text-green-500'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            <div className="flex items-center gap-1">
              {isComplete ? (
                <CheckCircle className="w-3 h-3" />
              ) : (
                getDayIcon(day)
              )}
            </div>
            <span className="text-xs font-medium whitespace-nowrap">
              {getDayLabel(day)}
            </span>
            {score !== undefined && (
              <span className="text-[10px] opacity-75">{score}/10</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
