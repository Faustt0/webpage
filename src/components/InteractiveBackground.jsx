import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      intensity: 0
    };

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget && !e.toElement) {
        mouse.active = false;
      }
    });

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // Subtle, Blurred Breathing Ambient Dots
    // -------------------------------------------------------------
    const DOT_COUNT = 28; // Sparse, calm count
    const dotColors = [
      { r: 244, g: 63, b: 94 },   // soft rose
      { r: 168, g: 85, b: 247 },  // soft purple
      { r: 236, g: 72, b: 153 },  // subtle pink
    ];

    const createDot = (initialRandomAge = false) => {
      const maxLife = 180 + Math.random() * 260; // 3 to 7.5 seconds
      const color = dotColors[Math.floor(Math.random() * dotColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: 2.0 + Math.random() * 2.5,
        color,
        life: initialRandomAge ? Math.random() * maxLife : maxLife,
        maxLife,
        peakAlpha: 0.18 + Math.random() * 0.18, // Subtle and soft
        pulseSpeed: 0.015 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.2,
        driftY: (Math.random() - 0.5) * 0.2,
      };
    };

    const dots = Array.from({ length: DOT_COUNT }, () => createDot(true));

    // -------------------------------------------------------------
    // Subtle Grid Configuration (Minimal, gentle micro-distortion)
    // -------------------------------------------------------------
    const step = 46; // Grid cell size in px
    const effectRadius = 90; // Very small, tight radius around cursor
    const maxDistortion = 3;  // Minimal subtle displacement

    // -------------------------------------------------------------
    // Main Render Loop
    // -------------------------------------------------------------
    const render = () => {
      // 1. Mouse physics easing
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.14;
        mouse.y += (mouse.targetY - mouse.y) * 0.14;
        mouse.intensity = Math.min(1, mouse.intensity + 0.08);
      } else {
        mouse.intensity = Math.max(0, mouse.intensity - 0.03);
      }

      // Draw dark background fill
      ctx.fillStyle = '#06070d';
      ctx.fillRect(0, 0, width, height);

      const mx = mouse.x;
      const my = mouse.y;
      const intensity = mouse.intensity;

      // Point displacement function (minimal & subtle)
      const getDistortedPoint = (gx, gy) => {
        if (intensity <= 0.001) return { x: gx, y: gy, dist: 9999 };
        const dx = gx - mx;
        const dy = gy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < effectRadius && dist > 0) {
          const norm = 1 - dist / effectRadius;
          const displacement = Math.sin(norm * Math.PI) * maxDistortion * intensity;
          const angle = Math.atan2(dy, dx);
          return {
            x: gx + Math.cos(angle) * displacement,
            y: gy + Math.sin(angle) * displacement,
            dist
          };
        }
        return { x: gx, y: gy, dist };
      };

      // -----------------------------------------------------------
      // 2. Base Grid Drawing
      // -----------------------------------------------------------
      // Base Horizontal lines
      ctx.beginPath();
      for (let y = 0; y <= height + step; y += step) {
        let first = true;
        for (let x = 0; x <= width + step; x += step / 2) {
          const pt = getDistortedPoint(x, y);
          if (first) {
            ctx.moveTo(pt.x, pt.y);
            first = false;
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
      }
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Base Vertical lines
      ctx.beginPath();
      for (let x = 0; x <= width + step; x += step) {
        let first = true;
        for (let y = 0; y <= height + step; y += step / 2) {
          const pt = getDistortedPoint(x, y);
          if (first) {
            ctx.moveTo(pt.x, pt.y);
            first = false;
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
      }
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // -----------------------------------------------------------
      // 3. Subtle Grid Brightening & Distortion Spotlight
      // -----------------------------------------------------------
      if (intensity > 0.01) {
        ctx.save();
        const spotlight = ctx.createRadialGradient(mx, my, 0, mx, my, effectRadius);
        spotlight.addColorStop(0, `rgba(244, 63, 94, ${0.22 * intensity})`);
        spotlight.addColorStop(0.6, `rgba(168, 85, 247, ${0.09 * intensity})`);
        spotlight.addColorStop(1, 'rgba(168, 85, 247, 0)');

        const minX = Math.max(0, Math.floor((mx - effectRadius) / step) * step);
        const maxX = Math.min(width + step, Math.ceil((mx + effectRadius) / step) * step);
        const minY = Math.max(0, Math.floor((my - effectRadius) / step) * step);
        const maxY = Math.min(height + step, Math.ceil((my + effectRadius) / step) * step);

        // Highlight horizontal lines in radius
        for (let y = minY; y <= maxY; y += step) {
          ctx.beginPath();
          let first = true;
          for (let x = minX; x <= maxX; x += step / 4) {
            const pt = getDistortedPoint(x, y);
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
          ctx.strokeStyle = spotlight;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }

        // Highlight vertical lines in radius
        for (let x = minX; x <= maxX; x += step) {
          ctx.beginPath();
          let first = true;
          for (let y = minY; y <= maxY; y += step / 4) {
            const pt = getDistortedPoint(x, y);
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
          ctx.strokeStyle = spotlight;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }

        // Subtle glowing intersection dots near cursor
        for (let x = minX; x <= maxX; x += step) {
          for (let y = minY; y <= maxY; y += step) {
            const pt = getDistortedPoint(x, y);
            if (pt.dist < effectRadius) {
              const nodeAlpha = (1 - pt.dist / effectRadius) * 0.25 * intensity;
              ctx.fillStyle = `rgba(244, 63, 94, ${nodeAlpha})`;
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        ctx.restore();
      }

      // -----------------------------------------------------------
      // 4. Subtle, Dreamy Blurred Breathing Dots
      // -----------------------------------------------------------
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        dot.life -= 1;
        dot.x += dot.driftX;
        dot.y += dot.driftY;

        // Smooth fade-in & fade-out envelope
        const lifeFraction = dot.life / dot.maxLife; // 1 down to 0
        let envelope = 1;
        if (lifeFraction > 0.75) {
          envelope = (1 - lifeFraction) / 0.25;
        } else if (lifeFraction < 0.25) {
          envelope = lifeFraction / 0.25;
        }

        // Gentle breathing sine pulse
        const pulse = Math.sin(Date.now() * dot.pulseSpeed * 0.05 + dot.pulseOffset);
        const currentAlpha = Math.max(0, dot.peakAlpha * envelope * (0.7 + 0.3 * pulse));
        const currentRadius = Math.max(1.0, dot.baseRadius + pulse * 0.6);

        if (currentAlpha > 0.005) {
          const { r, g, b } = dot.color;
          
          // Dreamy soft blurred radial glow without sharp centers
          const glowGrad = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, currentRadius * 5.5
          );
          glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.9})`);
          glowGrad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.5})`);
          glowGrad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.15})`);
          glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, currentRadius * 5.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Respawn expired dots
        if (dot.life <= 0 || dot.x < -20 || dot.x > width + 20 || dot.y < -20 || dot.y > height + 20) {
          dots[i] = createDot(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
