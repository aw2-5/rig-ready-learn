import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  silent?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary]', error.message, errorInfo.componentStack);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.silent) return null;

      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="text-center max-w-md space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-xl font-bold text-foreground">حدث خطأ غير متوقع</h2>
            <p className="text-muted-foreground text-sm">Something went wrong. Please try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              إعادة تحميل / Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function SafeComponent({ children }: { children: ReactNode }) {
  return <ErrorBoundary silent>{children}</ErrorBoundary>;
}
