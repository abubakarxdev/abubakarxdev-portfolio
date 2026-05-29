"use client";

// Web Audio API Synthesizer for high-fidelity 8-bit micro-sounds
let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
};

// Simple global audio state
let audioEnabled = false;

if (typeof window !== "undefined") {
  // Load initial value from localStorage or default to false to be respectful
  const stored = localStorage.getItem("sys_audio_enabled");
  audioEnabled = stored === "true";
}

export const isSystemAudioEnabled = () => audioEnabled;

export const setSystemAudioEnabled = (enabled: boolean) => {
  audioEnabled = enabled;
  if (typeof window !== "undefined") {
    localStorage.setItem("sys_audio_enabled", enabled ? "true" : "false");
    // Dispatch custom event to notify other components (e.g., Navbar toggle switch)
    window.dispatchEvent(new CustomEvent("sys_audio_state_change", { detail: enabled }));
    if (enabled) {
      initAudio();
    }
  }
};

export const playSystemSound = (type: "click" | "keypress" | "success" | "error" | "boot" | "matrix") => {
  if (!audioEnabled) return;
  
  const ctx = initAudio();
  if (!ctx) return;
  
  const now = ctx.currentTime;
  
  switch (type) {
    case "click": {
      // Very brief clean clicking pulse
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
      
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.045);
      break;
    }
    
    case "keypress": {
      // Muted tactile key typing sound (wood block / mechanical style)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "triangle";
      // Add slight micro-randomization to sound organic
      const randomPitch = Math.random() * 80 + 350;
      osc.frequency.setValueAtTime(randomPitch, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.02);
      
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.025);
      break;
    }
    
    case "success": {
      // High tech cybernetic double-chime ascending sweep
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.22); // B5
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.setValueAtTime(0.05, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.26);
      break;
    }
    
    case "error": {
      // Low dual-frequency warning buzzer
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(110, now);
      
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(115, now);
      
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.16);
      osc2.stop(now + 0.16);
      break;
    }
    
    case "boot": {
      // Complex high-tech ascending system chime sequence
      const frequencies = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const delay = idx * 0.05;
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + delay);
        
        gain.gain.setValueAtTime(0.02, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.15);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now + delay);
        osc.stop(now + delay + 0.16);
      });
      break;
    }
    
    case "matrix": {
      // Sci-fi synth micro-ripple sound for matrix sequence
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(900, now + 0.3);
      
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.3);
      break;
    }
  }
};
