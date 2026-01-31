import { useState, useEffect, useCallback } from 'react';

const AI_USAGE_KEY = 'ai-daily-usage';
const DAILY_LIMIT = 10;

interface AIUsageData {
  count: number;
  date: string;
}

export function useAIUsageLimit() {
  const [usageCount, setUsageCount] = useState(0);
  const [isLimitReached, setIsLimitReached] = useState(false);

  const getTodayKey = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getUsageData = useCallback((): AIUsageData => {
    const stored = localStorage.getItem(AI_USAGE_KEY);
    if (!stored) {
      return { count: 0, date: getTodayKey() };
    }
    
    try {
      const data = JSON.parse(stored) as AIUsageData;
      // Reset count if it's a new day
      if (data.date !== getTodayKey()) {
        return { count: 0, date: getTodayKey() };
      }
      return data;
    } catch {
      return { count: 0, date: getTodayKey() };
    }
  }, []);

  const updateUsage = useCallback(() => {
    const data = getUsageData();
    setUsageCount(data.count);
    setIsLimitReached(data.count >= DAILY_LIMIT);
  }, [getUsageData]);

  useEffect(() => {
    updateUsage();
  }, [updateUsage]);

  const incrementUsage = useCallback(() => {
    const data = getUsageData();
    const newCount = data.count + 1;
    const newData: AIUsageData = {
      count: newCount,
      date: getTodayKey()
    };
    localStorage.setItem(AI_USAGE_KEY, JSON.stringify(newData));
    setUsageCount(newCount);
    setIsLimitReached(newCount >= DAILY_LIMIT);
    return newCount <= DAILY_LIMIT;
  }, [getUsageData]);

  const getRemainingUsage = useCallback(() => {
    return Math.max(0, DAILY_LIMIT - usageCount);
  }, [usageCount]);

  return {
    usageCount,
    isLimitReached,
    incrementUsage,
    getRemainingUsage,
    dailyLimit: DAILY_LIMIT
  };
}
