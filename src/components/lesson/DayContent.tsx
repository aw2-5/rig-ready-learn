import { useState } from 'react';
import DOMPurify from 'dompurify';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { DailyContent } from '@/data/weeklyContent';
import { CheckCircle, XCircle, BookOpen, Key } from 'lucide-react';

// Configure DOMPurify to only allow safe HTML tags
const sanitizeConfig = {
  ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'div', 'section', 'span', 'br'],
  ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'style']
};
interface DayContentProps {
  dayContent: DailyContent;
  onComplete: () => void;
  isComplete: boolean;
}
export function DayContent({
  dayContent,
  onComplete,
  isComplete
}: DayContentProps) {
  const {
    language,
    t
  } = useLanguage();
  const [practiceAnswer, setPracticeAnswer] = useState<number | null>(null);
  const [showPracticeResult, setShowPracticeResult] = useState(false);
  const content = dayContent.content[language];
  const practiceQuestion = content.practiceQuestion;
  const handlePracticeAnswer = (index: number) => {
    setPracticeAnswer(index);
    setShowPracticeResult(true);
  };
  const isCorrect = practiceQuestion && practiceAnswer === practiceQuestion.correctAnswer;
  return <div className="space-y-4 animate-fade-in">
      {/* Day Title */}
      <Card variant="gradient">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t('day')} {dayContent.day}</p>
              <h3 className="font-bold text-foreground">{content.title}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Explanation */}
      <Card variant="default">
        <CardContent className="p-4 border-background text-destructive">
          <div className="text-foreground leading-relaxed prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground" dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content.explanation, sanitizeConfig)
        }} />
        </CardContent>
      </Card>

      {/* Key Terms */}
      {content.keyTerms.length > 0 && <Card variant="default">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Key className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-semibold text-foreground">{t('keyTerms')}</h4>
            </div>
            <div className="space-y-2">
              {content.keyTerms.map((term, index) => <div key={index} className="bg-secondary/50 rounded-lg p-3">
                  <span className="font-semibold text-accent">{term.term}:</span>
                  <span className="text-foreground ml-2">{term.definition}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>}

      {/* Practice Question */}
      {practiceQuestion && <Card variant="accent">
          <CardContent className="p-4">
            <h4 className="text-sm font-semibold text-foreground mb-3">{t('practiceQuestion')}</h4>
            <p className="text-foreground mb-4">{practiceQuestion.question}</p>
            <div className="space-y-2">
              {practiceQuestion.options.map((option, index) => {
            const isSelected = practiceAnswer === index;
            const showCorrect = showPracticeResult && index === practiceQuestion.correctAnswer;
            const showWrong = showPracticeResult && isSelected && !isCorrect;
            return <Button key={index} variant={showCorrect ? 'default' : showWrong ? 'destructive' : isSelected ? 'accent' : 'secondary'} className={`w-full justify-start text-start h-auto py-3 px-4 ${showCorrect ? 'bg-green-500/20 border-green-500 text-green-500' : ''}`} onClick={() => !showPracticeResult && handlePracticeAnswer(index)} disabled={showPracticeResult}>
                    <span className="w-6 h-6 rounded-full bg-background/50 flex items-center justify-center text-sm font-medium mr-3">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                    {showCorrect && <CheckCircle className="w-4 h-4 ml-auto text-green-500" />}
                    {showWrong && <XCircle className="w-4 h-4 ml-auto" />}
                  </Button>;
          })}
            </div>
            {showPracticeResult && <p className={`mt-3 text-sm font-medium ${isCorrect ? 'text-green-500' : 'text-destructive'}`}>
                {isCorrect ? t('correct') + '! 🎉' : t('incorrect') + ' - ' + t('tryAgain')}
              </p>}
          </CardContent>
        </Card>}

      {/* Complete Day Button */}
      {!isComplete && <Button variant="accent" className="w-full" onClick={onComplete} disabled={practiceQuestion && !showPracticeResult}>
          <CheckCircle className="w-4 h-4" />
          {t('completeDay')}
        </Button>}

      {isComplete && <div className="flex items-center justify-center gap-2 text-green-500 py-4">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">{t('dayCompleted')}</span>
        </div>}
    </div>;
}