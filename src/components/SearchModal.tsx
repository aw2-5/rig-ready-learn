import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { lessons } from '@/data/lessons';
import { lessonsYear2 } from '@/data/lessonsYear2';
import { lessonsYear3 } from '@/data/lessonsYear3';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  lessonId: string;
  lessonTitle: string;
  level: number;
  matchType: 'title' | 'content' | 'terminology';
  matchText: string;
  icon: string;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  // Reset query when modal closes
  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const allLessons = useMemo(() => [
    ...lessons.map(l => ({ ...l, level: 1 })),
    ...lessonsYear2.map(l => ({ ...l, level: 2 })),
    ...lessonsYear3.map(l => ({ ...l, level: 3 })),
  ], []);

  const searchResults = useMemo((): SearchResult[] => {
    if (!query.trim() || query.length < 2) return [];

    const normalizedQuery = query.toLowerCase().trim();
    const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 0);
    const results: SearchResult[] = [];

    // Helper to check if text contains all query words (for better matching)
    const containsAllWords = (text: string) => {
      const lowerText = text.toLowerCase();
      return queryWords.every(word => lowerText.includes(word));
    };

    // Helper to check if text contains any query word
    const containsAnyWord = (text: string) => {
      const lowerText = text.toLowerCase();
      return queryWords.some(word => lowerText.includes(word));
    };

    allLessons.forEach(lesson => {
      // Search in both languages for better results
      const enContent = lesson.content.en;
      const arContent = lesson.content.ar;
      const currentLangContent = lesson.content[language as 'en' | 'ar'];
      
      // Combine all searchable text
      const allText = [
        enContent?.title || '',
        enContent?.definition || '',
        enContent?.explanation || '',
        enContent?.summary || '',
        arContent?.title || '',
        arContent?.definition || '',
        arContent?.explanation || '',
        arContent?.summary || '',
      ].join(' ');

      const title = currentLangContent?.title || enContent?.title || '';
      const definition = currentLangContent?.definition || '';
      const explanation = currentLangContent?.explanation || '';
      const summary = currentLangContent?.summary || '';

      // Check for exact phrase match first
      if (allText.toLowerCase().includes(normalizedQuery)) {
        // Match in title
        if (title.toLowerCase().includes(normalizedQuery) || 
            enContent?.title?.toLowerCase().includes(normalizedQuery) ||
            arContent?.title?.toLowerCase().includes(normalizedQuery)) {
          results.push({
            lessonId: lesson.id,
            lessonTitle: title,
            level: lesson.level,
            matchType: 'title',
            matchText: title,
            icon: lesson.icon,
          });
          return;
        }

        // Match in definition
        const defToSearch = definition.toLowerCase().includes(normalizedQuery) ? definition : 
                           (enContent?.definition?.toLowerCase().includes(normalizedQuery) ? enContent.definition : arContent?.definition || '');
        if (defToSearch && defToSearch.toLowerCase().includes(normalizedQuery)) {
          const matchIndex = defToSearch.toLowerCase().indexOf(normalizedQuery);
          const start = Math.max(0, matchIndex - 30);
          const end = Math.min(defToSearch.length, matchIndex + query.length + 50);
          const excerpt = (start > 0 ? '...' : '') + defToSearch.slice(start, end) + (end < defToSearch.length ? '...' : '');
          
          results.push({
            lessonId: lesson.id,
            lessonTitle: title,
            level: lesson.level,
            matchType: 'content',
            matchText: excerpt,
            icon: lesson.icon,
          });
          return;
        }

        // Match in explanation
        const expToSearch = explanation.toLowerCase().includes(normalizedQuery) ? explanation :
                           (enContent?.explanation?.toLowerCase().includes(normalizedQuery) ? enContent.explanation : arContent?.explanation || '');
        if (expToSearch && expToSearch.toLowerCase().includes(normalizedQuery)) {
          const matchIndex = expToSearch.toLowerCase().indexOf(normalizedQuery);
          const start = Math.max(0, matchIndex - 30);
          const end = Math.min(expToSearch.length, matchIndex + query.length + 50);
          const excerpt = (start > 0 ? '...' : '') + expToSearch.slice(start, end) + (end < expToSearch.length ? '...' : '');
          
          results.push({
            lessonId: lesson.id,
            lessonTitle: title,
            level: lesson.level,
            matchType: 'content',
            matchText: excerpt,
            icon: lesson.icon,
          });
          return;
        }

        // Match in summary
        if (summary.toLowerCase().includes(normalizedQuery)) {
          results.push({
            lessonId: lesson.id,
            lessonTitle: title,
            level: lesson.level,
            matchType: 'content',
            matchText: summary.slice(0, 100) + '...',
            icon: lesson.icon,
          });
          return;
        }
      }

      // Fallback: check if all words match anywhere
      if (containsAllWords(allText)) {
        results.push({
          lessonId: lesson.id,
          lessonTitle: title,
          level: lesson.level,
          matchType: 'content',
          matchText: (definition || summary).slice(0, 100) + '...',
          icon: lesson.icon,
        });
        return;
      }

      // Last resort: partial word matching
      if (queryWords.length === 1 && containsAnyWord(allText)) {
        results.push({
          lessonId: lesson.id,
          lessonTitle: title,
          level: lesson.level,
          matchType: 'content',
          matchText: (definition || summary).slice(0, 100) + '...',
          icon: lesson.icon,
        });
      }
    });

    // Remove duplicates
    const uniqueResults = results.filter((result, index, self) =>
      index === self.findIndex(r => r.lessonId === result.lessonId)
    );

    return uniqueResults.slice(0, 20);
  }, [query, allLessons, language]);

  const handleResultClick = (lessonId: string) => {
    onOpenChange(false);
    navigate(`/lesson/${lessonId}`);
  };

  const getLevelLabel = (level: number) => {
    if (language === 'ar') {
      return level === 1 ? 'المستوى 1' : level === 2 ? 'المستوى 2' : 'المستوى 3';
    }
    return `Level ${level}`;
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-primary/20 text-primary';
      case 2: return 'bg-accent/20 text-accent';
      case 3: return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 gap-0" dir={isRTL ? 'rtl' : 'ltr'}>
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-accent" />
            {language === 'ar' ? 'البحث في الدروس' : 'Search Lessons'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              placeholder={language === 'ar' ? 'ابحث عن درس أو مصطلح...' : 'Search for a lesson or term...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={isRTL ? 'pr-10' : 'pl-10'}
              autoFocus
            />
          </div>
        </div>

        <ScrollArea className="max-h-[400px] px-4 pb-4">
          {query.length < 2 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              {language === 'ar' ? 'اكتب حرفين على الأقل للبحث' : 'Type at least 2 characters to search'}
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              {language === 'ar' ? 'لا توجد نتائج' : 'No results found'}
            </div>
          ) : (
            <div className="space-y-2">
              {searchResults.map((result, index) => (
                <button
                  key={`${result.lessonId}-${index}`}
                  onClick={() => handleResultClick(result.lessonId)}
                  className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{result.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground truncate">
                          {result.lessonTitle}
                        </span>
                        <Badge variant="outline" className={`text-xs shrink-0 ${getLevelColor(result.level)}`}>
                          {getLevelLabel(result.level)}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {result.matchText}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
