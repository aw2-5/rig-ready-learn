import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Bot, Send, X, Loader2, Sparkles, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-tutor`;

export function AIAssistant() {
  const { language, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamChat = async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);
    setInput('');

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: newMessages,
          language 
        }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          toast.error(language === 'ar' ? 'تم تجاوز الحد المسموح، حاول لاحقاً' : 'Rate limit exceeded, try again later');
          setIsLoading(false);
          return;
        }
        if (resp.status === 402) {
          toast.error(language === 'ar' ? 'يرجى إضافة رصيد للاستمرار' : 'Please add credits to continue');
          setIsLoading(false);
          return;
        }
        throw new Error('Failed to get response');
      }

      if (!resp.body) throw new Error('No response body');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let assistantContent = '';
      let streamDone = false;

      // Add empty assistant message
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const newMsgs = [...prev];
                newMsgs[newMsgs.length - 1] = { role: 'assistant', content: assistantContent };
                return newMsgs;
              });
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error('AI chat error:', error);
      toast.error(language === 'ar' ? 'حدث خطأ، حاول مرة أخرى' : 'An error occurred, please try again');
      // Remove the failed assistant message if it exists
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant' && !last.content) {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    streamChat(input.trim());
  };

  const placeholderText = language === 'ar' 
    ? 'اسأل عن هندسة الحفر...' 
    : 'Ask about drilling engineering...';

  const welcomeMessage = language === 'ar'
    ? 'مرحباً! أنا مساعدك في هندسة الحفر. اسألني أي سؤال عن الدروس أو المصطلحات التقنية.'
    : "Hi! I'm your drilling engineering tutor. Ask me anything about the lessons or technical terms.";

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 z-50 w-14 h-14 rounded-full shadow-lg gradient-accent hover:scale-105 transition-transform ${isRTL ? 'left-6' : 'right-6'}`}
        size="icon"
      >
        <Bot className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-24 z-50 w-[calc(100%-2rem)] max-w-md shadow-2xl border-0 overflow-hidden ${isRTL ? 'left-4' : 'right-4'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 gradient-accent">
            <div className="flex items-center gap-2 text-accent-foreground">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  {language === 'ar' ? 'مساعد الحفر الذكي' : 'AI Drilling Tutor'}
                </h3>
                <p className="text-xs opacity-80">
                  {language === 'ar' ? 'اسأل أي سؤال' : 'Ask any question'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-accent-foreground hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="h-80 p-4" ref={scrollRef}>
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">{welcomeMessage}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {msg.content || (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholderText}
                disabled={isLoading}
                className="flex-1"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                )}
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
}
