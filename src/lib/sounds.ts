// Sound effects using Web Audio API - no external files needed

let audioContext: AudioContext | null = null;
let isMuted = false;

// Initialize audio context on first user interaction
const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
      return null;
    }
  }
  return audioContext;
};

// Resume audio context if suspended (required for mobile)
const resumeAudioContext = async () => {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    await ctx.resume();
  }
};

// Mute/unmute sounds
export const setMuted = (muted: boolean) => {
  isMuted = muted;
};

export const getMuted = () => isMuted;

// Play a tone with specific frequency and duration
const playTone = (
  frequency: number,
  duration: number,
  type: OscillatorType = 'sine',
  volume: number = 0.3
) => {
  if (isMuted) return;
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  resumeAudioContext();
  
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    
    // Fade in
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
    
    // Fade out
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn('Error playing sound:', e);
  }
};

// Play multiple tones in sequence for a melody
const playMelody = (
  notes: { frequency: number; duration: number; delay: number }[],
  volume: number = 0.3
) => {
  if (isMuted) return;
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  resumeAudioContext();
  
  notes.forEach(({ frequency, duration, delay }) => {
    setTimeout(() => {
      playTone(frequency, duration, 'sine', volume);
    }, delay * 1000);
  });
};

// === Sound Effects ===

// Correct answer - happy ascending tone
export const playCorrectSound = () => {
  playMelody([
    { frequency: 523.25, duration: 0.1, delay: 0 },    // C5
    { frequency: 659.25, duration: 0.1, delay: 0.08 }, // E5
    { frequency: 783.99, duration: 0.15, delay: 0.16 }, // G5
  ], 0.25);
};

// Wrong answer - descending tone
export const playWrongSound = () => {
  playMelody([
    { frequency: 400, duration: 0.15, delay: 0 },
    { frequency: 300, duration: 0.2, delay: 0.1 },
  ], 0.2);
};

// Achievement/completion - celebratory melody
export const playAchievementSound = () => {
  playMelody([
    { frequency: 523.25, duration: 0.1, delay: 0 },     // C5
    { frequency: 587.33, duration: 0.1, delay: 0.1 },   // D5
    { frequency: 659.25, duration: 0.1, delay: 0.2 },   // E5
    { frequency: 783.99, duration: 0.1, delay: 0.3 },   // G5
    { frequency: 1046.50, duration: 0.25, delay: 0.4 }, // C6
  ], 0.3);
};

// Click sound - short blip
export const playClickSound = () => {
  playTone(800, 0.05, 'sine', 0.15);
};

// Streak/badge sound - special fanfare
export const playStreakSound = () => {
  playMelody([
    { frequency: 392.00, duration: 0.1, delay: 0 },     // G4
    { frequency: 523.25, duration: 0.1, delay: 0.1 },   // C5
    { frequency: 659.25, duration: 0.1, delay: 0.2 },   // E5
    { frequency: 783.99, duration: 0.15, delay: 0.3 },  // G5
    { frequency: 1046.50, duration: 0.3, delay: 0.45 }, // C6
  ], 0.35);
};

// Timer warning - urgent beep
export const playTimerWarningSound = () => {
  playTone(880, 0.1, 'square', 0.15);
};
