import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const VintageIntro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

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
            }, 800); // Allow shutter transition to finish
          }, 400);
          return 100;
        }
        // Organic variable speed increments for realistic loader feel
        const inc = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + inc, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Audio click sound effect generation using Web Audio API (no external asset needed)
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Ignore audio autoplay restrictions
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
    }, 600);
  };

  // Dynamic system status text based on progress
  const getStatusText = () => {
    if (progress < 25) return 'INITIALIZING SYSTEM ARCHITECTURE...';
    if (progress < 55) return 'LOADING LARAVEL & NODE.JS SERVICES...';
    if (progress < 85) return 'STAGING AI MICROSERVICES & SCHEMAS...';
    if (progress < 100) return 'FINALIZING EXECUTIVE INTERFACE...';
    return 'SYSTEM READY // ACCESS GRANTED';
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="vintage-intro-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#050608',
            color: '#f59e0b',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            padding: '2.5rem',
            fontFamily: "'Courier New', Courier, monospace",
            userSelect: 'none',
            overflow: 'hidden'
          }}
        >
          {/* Vintage CRT Scanlines Overlay */}
          <div className="vintage-scanlines" />

          {/* Top Vintage Bar: Camera Viewfinder Specs */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span className="vintage-rec-dot" />
              <span style={{ fontSize: '0.82rem', letterSpacing: '0.15em', fontWeight: 700, color: '#f59e0b' }}>
                REC ● 24 FPS
              </span>
              <span style={{ opacity: 0.4, color: '#94a3b8' }}>|</span>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', letterSpacing: '0.1em' }}>
                TAPE_ID: SAYANI-ROY-2026
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Mute/Unmute Audio Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: '#f59e0b',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  letterSpacing: '0.08em'
                }}
              >
                {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                {soundEnabled ? 'AUDIO ON' : 'AUDIO MUTED'}
              </button>

              {/* Instant Skip Button */}
              <button
                onClick={handleSkip}
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(56, 189, 248, 0.25))',
                  border: '1px solid rgba(245, 158, 11, 0.5)',
                  color: '#ffffff',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)'
                }}
              >
                SKIP INTRO ➔
              </button>
            </div>
          </div>

          {/* Viewfinder Corner Framing Brackets */}
          <div className="vintage-corner top-left" />
          <div className="vintage-corner top-right" />
          <div className="vintage-corner bottom-left" />
          <div className="vintage-corner bottom-right" />

          {/* Center Graphic & Countdown Dial */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justify: 'center',
              zIndex: 10,
              margin: 'auto 0'
            }}
          >
            {/* Film Reel Circle Indicator */}
            <div
              style={{
                position: 'relative',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                border: '2px dashed rgba(245, 158, 11, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                marginBottom: '2rem',
                boxShadow: '0 0 40px rgba(245, 158, 11, 0.15)'
              }}
            >
              {/* Rotating Outer Ring */}
              <div
                className="vintage-rotate-ring"
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderTopColor: '#38bdf8'
                }}
              />

              {/* Crosshair Overlay Lines */}
              <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(245, 158, 11, 0.2)' }} />
              <div style={{ position: 'absolute', height: '100%', width: '1px', background: 'rgba(245, 158, 11, 0.2)' }} />

              {/* Huge Retro Counter Number Display */}
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '4.8rem',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    color: '#ffffff',
                    textShadow: '0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(56, 189, 248, 0.4)',
                    lineHeight: 1
                  }}
                >
                  {String(progress).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f59e0b', marginLeft: '4px' }}>%</span>
              </div>
            </div>

            {/* Vintage Film Leader Title */}
            <div style={{ textAlign: 'center', maxWidth: '600px' }}>
              <div
                style={{
                  fontSize: '0.9rem',
                  letterSpacing: '0.25em',
                  color: '#38bdf8',
                  marginBottom: '0.6rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                ✦ SAYANI ROY // ARCHITECTURE PORTFOLIO ✦
              </div>

              {/* Dynamic Status Bar */}
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  letterSpacing: '0.08em',
                  background: 'rgba(16, 19, 29, 0.8)',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
                {getStatusText()}
              </div>
            </div>

            {/* Vintage Progress Bar Strip */}
            <div
              style={{
                width: '320px',
                height: '5px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                marginTop: '1.8rem',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #f59e0b, #38bdf8, #10b981)',
                  transition: 'width 0.15s ease-out',
                  boxShadow: '0 0 12px #f59e0b'
                }}
              />
            </div>
          </div>

          {/* Bottom Bar Specs */}
          <div
            style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              zIndex: 10,
              fontSize: '0.75rem',
              color: '#64748b',
              letterSpacing: '0.1em'
            }}
          >
            <span>[ SYSTEM: ONLINE ]</span>
            <span>BACKEND & DATA ARCHITECTURE</span>
            <span>FRAME: 00{progress}/100</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VintageIntro;
