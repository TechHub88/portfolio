import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, Server, Database, Layers, CheckCircle2, FastForward } from 'lucide-react';

const VintageIntro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Real backend developer terminal log commands
  const devLogs = [
    { threshold: 0, cmd: '$ init_kernel --env=production', status: 'SYS_BOOT OK' },
    { threshold: 15, cmd: '$ php artisan migrate --database=postgresql_prod', status: 'TABLES SYNCED' },
    { threshold: 32, cmd: '$ node server.js --cluster=4 --port=8080', status: 'HTTP SERVER READY' },
    { threshold: 52, cmd: '$ docker-compose up -d openai_gateway gemini_llm', status: 'CONTAINERS ACTIVE' },
    { threshold: 72, cmd: '$ psql -U sayani -d portfolio_db -c "VACUUM ANALYZE;"', status: 'QUERIES OPTIMIZED' },
    { threshold: 88, cmd: '$ curl -I https://api.sayani.dev/v1/status', status: '200 OK' },
    { threshold: 98, cmd: '$ ./launch_portfolio_interface.sh', status: 'SUCCESS' },
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
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinished(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450);
  };

  const currentLog = [...devLogs].reverse().find((log) => progress >= log.threshold);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
          className="vintage-intro-overlay"
        >
          {/* CRT Scanline & Retro Phosphor Code Grid Effects */}
          <div className="vintage-scanlines" />
          <div className="dev-terminal-grid-bg" />

          {/* Retro Developer Terminal Bracket Corners */}
          <div className="vintage-corner top-left" />
          <div className="vintage-corner top-right" />
          <div className="vintage-corner bottom-left" />
          <div className="vintage-corner bottom-right" />

          {/* TOP HEADER: Clean Developer Terminal Shell Bar */}
          <div className="intro-header-bar">
            <div className="intro-status-group">
              <div className="dev-terminal-prompt">
                <Terminal size={14} color="#f59e0b" />
                <span className="dev-prompt-text">SAYANI_ROY_OS_v2.6</span>
              </div>
              <span className="intro-divider">|</span>
              <span className="tape-id-text">[SHELL: zsh / bash]</span>
              <span className="intro-divider hide-mobile">|</span>
              <span className="tape-id-text hide-mobile">[IP: 127.0.0.1:8080]</span>
            </div>

            <div className="intro-controls-group">
              <button
                onClick={handleSkip}
                className="intro-btn dev-skip-btn"
                title="Skip Terminal Boot"
              >
                <FastForward size={13} />
                <span>$ ./skip_boot.sh ➔</span>
              </button>
            </div>
          </div>

          {/* CENTER CONTENT: Developer Terminal Code Counter & Telemetry */}
          <div className="intro-center-content">
            
            {/* Developer Tech Badges HUD */}
            <div className="intro-telemetry-row">
              <div className="telemetry-pill">
                <Code size={12} color="#38bdf8" />
                <span>STACK: PHP &amp; NODE.JS</span>
              </div>
              <div className="telemetry-pill">
                <Database size={12} color="#f59e0b" />
                <span>DB: POSTGRESQL</span>
              </div>
              <div className="telemetry-pill">
                <Layers size={12} color="#10b981" />
                <span>AI: OPENAI &amp; GEMINI</span>
              </div>
              <div className="telemetry-pill hide-mobile">
                <Server size={12} color="#ff4d6d" />
                <span>STATUS: 200 OK</span>
              </div>
            </div>

            {/* Retro Developer Terminal Counter Ring */}
            <div className="intro-countdown-circle">
              {/* Rotating Tech HUD Ring */}
              <div className="vintage-rotate-ring intro-ring-overlay" />

              {/* Crosshair Laser Lines */}
              <div className="crosshair-h" />
              <div className="crosshair-v" />

              {/* Dead-Centered 00% - 100% Display */}
              <div className="countdown-text-box">
                <div className="countdown-number-wrapper">
                  <span className="countdown-number">{String(progress).padStart(2, '0')}</span>
                  <span className="countdown-percent">%</span>
                </div>
              </div>
            </div>

            {/* Real Developer Terminal Window with Executing Commands */}
            <div className="intro-terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminal-title">
                  <Terminal size={12} style={{ display: 'inline', marginRight: '6px' }} />
                  sayani@backend-server:~ (zsh)
                </div>
              </div>

              <div className="terminal-body">
                <div className="terminal-log-output">
                  <div className="terminal-cmd-line">
                    <span className="dev-prompt-symbol">sayani@dev:~$</span>{' '}
                    <span className="dev-cmd-text">{currentLog ? currentLog.cmd : '$ init'}</span>
                    <span className="terminal-cursor">█</span>
                  </div>
                  <div className="terminal-status-line">
                    <CheckCircle2 size={12} color="#10b981" style={{ display: 'inline', marginRight: '4px' }} />
                    <span className="status-highlight">STATUS:</span> {currentLog ? currentLog.status : 'EXEC_OK'}
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Progress Bar */}
            <div className="intro-progress-track">
              <div
                className="intro-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* BOTTOM FOOTER: Developer Console Status */}
          <div className="intro-footer-bar">
            <span>[ SYSTEM: KERNEL_STABLE ]</span>
            <span className="hide-mobile">SOFTWARE &amp; BACKEND ARCHITECTURE</span>
            <span>BOOT: {progress}% / 100%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VintageIntro;
