import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { DailyContent } from '@/data/weeklyContent';
import { 
  Upload, 
  Image as ImageIcon, 
  FileText, 
  CheckCircle, 
  Lightbulb,
  X
} from 'lucide-react';

interface DayProjectProps {
  dayContent: DailyContent;
  onComplete: () => void;
  isComplete: boolean;
}

export function DayProject({ dayContent, onComplete, isComplete }: DayProjectProps) {
  const { language, t } = useLanguage();
  const [textSubmission, setTextSubmission] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const project = dayContent.project?.[language];

  if (!project) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const canSubmit = () => {
    if (project.submissionType === 'text') return textSubmission.trim().length > 50;
    if (project.submissionType === 'image') return imagePreview !== null;
    return textSubmission.trim().length > 50 || imagePreview !== null;
  };

  const handleSubmit = () => {
    if (canSubmit()) {
      // In a real app, you would save the submission here
      onComplete();
    }
  };

  if (isComplete) {
    return (
      <Card variant="default" className="animate-scale-in">
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{t('projectSubmitted')}</h3>
          <p className="text-muted-foreground">
            {t('projectSubmittedDesc')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Project Header */}
      <Card variant="gradient">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t('miniProject')}</p>
              <h3 className="font-bold text-foreground">{project.title}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Description */}
      <Card variant="default">
        <CardContent className="p-4">
          <p className="text-foreground mb-4">{project.description}</p>
          
          <h4 className="text-sm font-semibold text-accent mb-2">{t('instructions')}:</h4>
          <ul className="space-y-2">
            {project.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs font-medium shrink-0">
                  {index + 1}
                </span>
                {instruction}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Text Submission */}
      {(project.submissionType === 'text' || project.submissionType === 'both') && (
        <Card variant="default">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-semibold text-foreground">{t('textSubmission')}</h4>
            </div>
            <Textarea
              placeholder={t('writeYourAnswer')}
              value={textSubmission}
              onChange={(e) => setTextSubmission(e.target.value)}
              className="min-h-[150px] resize-none"
            />
            <p className="text-xs text-muted-foreground mt-2">
              {textSubmission.length} {t('characters')} ({t('minimum')} 50)
            </p>
          </CardContent>
        </Card>
      )}

      {/* Image Submission */}
      {(project.submissionType === 'image' || project.submissionType === 'both') && (
        <Card variant="default">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-semibold text-foreground">{t('imageSubmission')}</h4>
            </div>
            
            {imagePreview ? (
              <div className="relative">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 w-8 h-8"
                  onClick={removeImage}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div 
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-accent transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t('uploadImage')}</p>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </CardContent>
        </Card>
      )}

      {/* Submit Button */}
      <Button 
        variant="accent" 
        className="w-full" 
        onClick={handleSubmit}
        disabled={!canSubmit()}
      >
        <CheckCircle className="w-4 h-4" />
        {t('submitProject')}
      </Button>
    </div>
  );
}
