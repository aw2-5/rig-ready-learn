import confetti from 'canvas-confetti';

// Theme-aware colors (using CSS custom properties converted to hex)
const getThemeColors = (): string[] => {
  // Default celebratory colors that work well in both themes
  return ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
};

// Small burst for correct answers
export const correctAnswerConfetti = () => {
  const colors = getThemeColors();
  
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { y: 0.7 },
    colors: colors.slice(0, 4),
    ticks: 100,
    gravity: 1.2,
    scalar: 0.8,
    disableForReducedMotion: true,
  });
};

// Medium celebration for challenge completion
export const challengeCompleteConfetti = () => {
  const colors = getThemeColors();
  
  // Fire from left
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.6 },
    colors,
    ticks: 150,
    disableForReducedMotion: true,
  });
  
  // Fire from right
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.6 },
    colors,
    ticks: 150,
    disableForReducedMotion: true,
  });
};

// Big celebration for quiz completion and major achievements
export const bigCelebration = () => {
  const colors = getThemeColors();
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  
  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    
    const particleCount = 50 * (timeLeft / duration);
    
    // Confetti from random positions
    confetti({
      particleCount: Math.floor(particleCount / 2),
      startVelocity: 30,
      spread: 360,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2,
      },
      colors,
      ticks: 200,
      disableForReducedMotion: true,
    });
  }, 250);
};

// Streak badge confetti - fire emoji style
export const streakBadgeConfetti = () => {
  const fireColors = ['#FF6B35', '#FF8C42', '#FFD166', '#FF4500', '#FF6347'];
  
  // Burst from center
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.5, x: 0.5 },
    colors: fireColors,
    ticks: 150,
    gravity: 0.8,
    scalar: 1.2,
    disableForReducedMotion: true,
  });
};

// XP gain confetti - golden sparkles
export const xpGainConfetti = () => {
  const goldColors = ['#FFD700', '#FFC125', '#FFDF00', '#F0E68C', '#FFE135'];
  
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { y: 0.6 },
    colors: goldColors,
    ticks: 100,
    gravity: 1,
    scalar: 0.9,
    shapes: ['circle'],
    disableForReducedMotion: true,
  });
};

// Speed bonus confetti - lightning fast burst
export const speedBonusConfetti = () => {
  const electricColors = ['#00BFFF', '#1E90FF', '#00CED1', '#40E0D0', '#7FFFD4'];
  
  confetti({
    particleCount: 25,
    spread: 40,
    origin: { y: 0.5 },
    colors: electricColors,
    ticks: 80,
    gravity: 1.5,
    scalar: 0.7,
    startVelocity: 45,
    disableForReducedMotion: true,
  });
};
