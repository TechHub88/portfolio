import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Terminal, Cpu, Database, Server, Radio, ShieldCheck } from 'lucide-react';

const VintageIntro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Terminal log lines synced with loader progress
  const terminalLogs = [
    { threshold: 0, text: 'SYSTEM_BOOT // SAYANI_ROY_KERNEL_v2.6' },
    { threshold: 12, text: 'INIT_PHP_FPM_POOL: 8 WORKERS ALLOCATED [OK]' },
    { threshold: 28, text: 'DB_CONNECT: POSTGRESQL 127.0.0.1:5432 (LATENCY 3ms)' },
    { threshold: 45, text: 'REST_API: MOUNTING LARAVEL & NODE.JS ENDPOINTS' },
    { threshold: 65, text: 'AI_MICROSERVICES: SYNCING OPENAI & GEMINI PIPELINES' },
    { threshold: 85, text: 'DATA_ENGINEERING: STAGING SQL & AGGREGATIONS' },
    { threshold: 98, text: 'EXEC_UI: ALL SYSTEMS NOMINAL [200 OK]' },
  ];

  // Animated countdown from 0 to 100%
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 750);
          }, 350);
          return 100;
        }
        const inc = Math.floor(Math.random() * 7) + 3;
        return Math.min(prev + inc, 100);
      });
    }, 65);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Web Audio API click sound generator
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      // Audio autoplay fallback
    }
  };

  useEffect(() => {
    if (progress > 0 && progress < 100) {
      playClickSound();
    }
  }, [progress]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinished(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 500);
  };

  const currentLog = [...terminalLogs].reverse().find((log) => progress >= log.threshold);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
          transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
          className="vintage-intro-overlay"
        >
          {/* Scanline & Cyber Mesh Effects */}
          <div className="vintage-scanlines" />
          <div className="techie-grid-bg" />

          {/* Viewfinder Corner Framing Brackets */}
          <div className="vintage-corner top-left" />
          <div className="vintage-corner top-right" />
          <div className="vintage-corner bottom-left" />
          <div className="vintage-corner bottom-right" />

          {/* TOP HEADER: Fully Mobile Optimized with nowrap & clean flex structure */}
          <div className="intro-header-bar">
            <div className="intro-status-group">
              <div className="rec-badge">
                <span className="vintage-rec-dot" />
                <span className="rec-text">REC ● 24 FPS</span>
              </div>
              <span className="intro-divider">|</span>
              <span className="tape-id-text">TAPE_ID: SAYANI-ROY-2026</span>
            </div>

            <div className="intro-controls-group">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="intro-btn intro-btn-sound"
                title="Toggle Audio Effects"
              >
                {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
                <span>{soundEnabled ? 'AUDIO ON' : 'MUTED'}</span>
              </button>

              <button
                onClick={handleSkip}
                className="intro-btn intro-btn-skip"
              >
                <span>SKIP INTRO ➔</span>
              </button>
            </div>
          </div>

          {/* MAIN CONTENT: Techie Countdown Dial & Terminal Log */}
          <div className="intro-center-content">
            
            {/* Tech Telemetry HUD Pills */}
            <div className="intro-telemetry-row">
              <div className="telemetry-pill">
                <Cpu size={12} color="#38bdf8" />
                <span>CPU: {(12 + (progress % 15)).toString()}%</span>
              </div>
              <div className="telemetry-pill">
                <Server size={12} color="#f59e0b" />
                <span>RAM: {Math.min(256 + progress * 4, 612)}MB</span>
              </div>
              <div className="telemetry-pill">
                <Radio size={12} color="#10b981" />
                <span>PING: 8ms</span>
              </div>
              <div className="telemetry-pill hide-mobile">
                <ShieldCheck size={12} color="#38bdf8" />
                <span>ENV: PRODUCTION</span>
              </div>
            </div>

            {/* Film Reel & Retro Tech Countdown Circle */}
            <div className="intro-countdown-circle">
              {/* Spinning Ring */}
              <div className="vintage-rotate-ring intro-ring-overlay" />

              {/* Crosshair Overlay */}
              <div className="crosshair-h" />
              <div className="crosshair-v" />

              {/* Counter Display */}
              <div className="countdown-text-box">
                <span className="countdown-number">{String(progress).padStart(2, '0')}</span>
                <span className="countdown-percent">%</span>
              </div>
            </div>

            {/* Live Terminal Command Stream Window */}
            <div className="intro-terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminal-title">
                  <Terminal size={12} style={{ display: 'inline', marginRight: '5px' }} />
                  backend_architecture_loader.sh
                </div>
              </div>

              <div className="terminal-body">
                <div className="terminal-line active-line">
                  <span className="prompt-symbol">&gt;</span> {currentLog ? currentLog.text : 'INITIALIZING...'}
                  <span className="terminal-cursor">_</span>
                </div>
              </div>
            </div>

            {/* High-Tech Progress Bar */}
            <div className="intro-progress-track">
              <div
                className="intro-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* BOTTOM FOOTER: Clean Mobile Responsive Row */}
          <div className="intro-footer-bar">
            <span>[ STATUS: ONLINE ]</span>
            <span className="hide-mobile">PHP LARAVEL &amp; NODE ARCHITECTURE</span>
            <span>FRAME: 00{progress}/100</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VintageIntro;
