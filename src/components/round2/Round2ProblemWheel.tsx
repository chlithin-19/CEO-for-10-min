import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Round2Domain, Round2Case } from '../../data/round2Domains';
import { 
  DEFAULT_WHEEL_CONFIG, 
  calculateTargetRotation, 
  getActiveSegmentIndex, 
  executiveEasing 
} from '../../utils/wheelMath';
import { sound } from '../../utils/audio';

interface Round2ProblemWheelProps {
  domain: Round2Domain;
  isSpinning: boolean;
  onSpinStart: () => void;
  onSpinComplete: (selected: Round2Case) => void;
  selectedCase: Round2Case | null;
  compact?: boolean;
}

export const Round2ProblemWheel: React.FC<Round2ProblemWheelProps> = ({
  domain,
  isSpinning,
  onSpinComplete,
  selectedCase,
  compact = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentRotationRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastActiveSegmentRef = useRef<number>(-1);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  // Synchronize highlighted index when selectedCase changes
  useEffect(() => {
    if (selectedCase) {
      const idx = domain.cases.findIndex(c => c.id === selectedCase.id);
      if (idx !== -1) {
        setHighlightedIndex(idx);
      }
    } else {
      setHighlightedIndex(null);
    }
  }, [selectedCase, domain]);

  // Render the bold executive wheel onto the canvas
  const drawWheel = useCallback((rotationDeg: number, activeHighlight: number | null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = Math.min(centerX, centerY) - 28;
    const innerHubRadius = outerRadius * 0.27;

    const segmentCount = domain.cases.length;
    const segmentAngle = (2 * Math.PI) / segmentCount;
    const rotationRad = (rotationDeg * Math.PI) / 180;

    // Ambient Outer Shadow (Bold executive presence)
    ctx.save();
    ctx.shadowColor = 'rgba(17, 17, 17, 0.22)';
    ctx.shadowBlur = 45;
    ctx.shadowOffsetY = 16;
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();

    // Heavy Outer Gold Bezel (Thick executive border)
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 6, 0, 2 * Math.PI);
    ctx.strokeStyle = '#B58A45';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 2, 0, 2 * Math.PI);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Outer Dial Graduation Ticks (Executive instrument feel)
    for (let deg = 0; deg < 360; deg += 5) {
      const rad = (deg * Math.PI) / 180;
      const isMajor = deg % 30 === 0;
      const tickLength = isMajor ? 9 : 5;
      const startR = outerRadius + 10;
      const endR = startR + tickLength;

      const x1 = centerX + Math.cos(rad) * startR;
      const y1 = centerY + Math.sin(rad) * startR;
      const x2 = centerX + Math.cos(rad) * endR;
      const y2 = centerY + Math.sin(rad) * endR;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = isMajor ? '#B58A45' : 'rgba(181, 138, 69, 0.45)';
      ctx.lineWidth = isMajor ? 2.5 : 1.2;
      ctx.stroke();
    }

    // Outer Ticks Ring Border
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 20, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(181, 138, 69, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw Wheel Segments
    for (let i = 0; i < segmentCount; i++) {
      const startAngle = rotationRad + i * segmentAngle;
      const endAngle = startAngle + segmentAngle;
      const isHighlighted = activeHighlight === i;

      // Segment Wedge Path
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.closePath();

      // Alternating bold shades
      const isEven = i % 2 === 0;
      let fillColor = isEven ? '#FFFFFF' : '#F5F3EE';

      if (isHighlighted) {
        fillColor = '#111111'; // Inverted Bold Black for selected segment
      }

      ctx.fillStyle = fillColor;
      ctx.fill();

      // Bold Segment Outer Border
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(startAngle) * outerRadius,
        centerY + Math.sin(startAngle) * outerRadius
      );
      ctx.strokeStyle = isHighlighted ? '#B58A45' : '#111111';
      ctx.lineWidth = isHighlighted ? 3 : 2;
      ctx.stroke();

      // Segment Typography
      const round2Case = domain.cases[i];
      if (round2Case) {
        ctx.save();
        const midAngle = startAngle + segmentAngle / 2;
        const textRadius = innerHubRadius + (outerRadius - innerHubRadius) * 0.54;

        ctx.translate(
          centerX + Math.cos(midAngle) * textRadius,
          centerY + Math.sin(midAngle) * textRadius
        );
        ctx.rotate(midAngle + Math.PI / 2);

        // Roman Numeral / Step Badge
        ctx.font = '700 11px "Cinzel", "Playfair Display", Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isHighlighted ? '#B58A45' : '#8F6B32';
        ctx.fillText(`CASE 0${i + 1}`, 0, -18);

        // Concise Problem Label
        ctx.font = '800 13px "Cinzel", "Playfair Display", Georgia, serif';
        ctx.letterSpacing = '1px';
        ctx.fillStyle = isHighlighted ? '#FFFFFF' : '#111111';

        const label = round2Case.wheelLabel;
        const words = label.split(' ');
        if (words.length > 2) {
          const line1 = words.slice(0, 2).join(' ');
          const line2 = words.slice(2).join(' ');
          ctx.fillText(line1, 0, 0);
          ctx.fillText(line2, 0, 16);
        } else if (words.length === 2 && label.length > 14) {
          ctx.fillText(words[0], 0, 0);
          ctx.fillText(words[1], 0, 16);
        } else {
          ctx.fillText(label, 0, 3);
        }

        ctx.restore();
      }
    }

    // Outer Rim Solid Border
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Central Executive Hub
    ctx.save();
    ctx.shadowColor = 'rgba(17, 17, 17, 0.4)';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius + 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#B58A45';
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#111111';
    ctx.fill();
    ctx.strokeStyle = '#B58A45';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Inner Hub Decorative Ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius - 8, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(181, 138, 69, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Hub Monogram: CEO / R2
    ctx.save();
    ctx.font = '800 15px "Cinzel", "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFFFFF';
    ctx.letterSpacing = '3px';
    ctx.fillText('ROUND 2', 0 + centerX, centerY - 8);

    ctx.font = '700 10px "Cinzel", sans-serif';
    ctx.fillStyle = '#B58A45';
    ctx.letterSpacing = '2px';
    ctx.fillText('BOARDROOM', 0 + centerX, centerY + 10);
    ctx.restore();

    ctx.restore();
  }, [domain]);

  // Initial draw and redraw on domain or highlight change
  useEffect(() => {
    drawWheel(currentRotationRef.current, highlightedIndex);
  }, [domain, highlightedIndex, drawWheel]);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      drawWheel(currentRotationRef.current, highlightedIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawWheel, highlightedIndex]);

  // Spinning Animation Loop
  useEffect(() => {
    if (!isSpinning) return;

    const duration = DEFAULT_WHEEL_CONFIG.durationMs;
    const targetIdx = Math.floor(Math.random() * domain.cases.length);
    const targetCase = domain.cases[targetIdx];

    const startRotation = currentRotationRef.current;
    const targetRotation = calculateTargetRotation(
      startRotation,
      targetIdx,
      domain.cases.length,
      DEFAULT_WHEEL_CONFIG.minSpins,
      DEFAULT_WHEEL_CONFIG.maxSpins
    );

    const totalDistance = targetRotation - startRotation;
    const startTime = performance.now();
    setHighlightedIndex(null);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = executiveEasing(progress);

      const currentRot = startRotation + totalDistance * easedProgress;
      currentRotationRef.current = currentRot;

      // Track active segment & play mechanical audio tick
      const activeSeg = getActiveSegmentIndex(currentRot, domain.cases.length);
      if (activeSeg !== lastActiveSegmentRef.current) {
        lastActiveSegmentRef.current = activeSeg;
        const velocity = (1 - progress);
        sound.playTick(velocity);
      }

      drawWheel(currentRot, null);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete: lock rotation, highlight, sound, and callback
        currentRotationRef.current = targetRotation;
        setHighlightedIndex(targetIdx);
        drawWheel(targetRotation, targetIdx);
        sound.playDecisionLocked();
        onSpinComplete(targetCase);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSpinning, domain, onSpinComplete, drawWheel]);

  const sizeClasses = compact
    ? "w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]"
    : "w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px]";

  return (
    <div className="relative flex items-center justify-center p-3 select-none">
      
      {/* Heavy Gold Pointer Needle (12 o'clock position / 270 degrees) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        {/* Pivot Mount */}
        <div className="w-5 h-5 rounded-full bg-[#111111] border-2 border-[#B58A45] shadow-lg flex items-center justify-center mb-[-5px]">
          <div className="w-2 h-2 rounded-full bg-[#B58A45]" />
        </div>
        {/* Tapered Pointer Blade */}
        <div 
          className="w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[30px] border-t-[#B58A45] filter drop-shadow-[0_6px_8px_rgba(17,17,17,0.4)]"
        />
      </div>

      {/* HTML5 Canvas Wheel */}
      <div className={`relative ${sizeClasses} rounded-full overflow-hidden flex items-center justify-center`}>
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-default"
          style={{ width: '100%', height: '100%' }}
          role="img"
          aria-label={`Round 2 Problem Wheel for ${domain.name} containing 6 boardroom cases`}
        />
      </div>

    </div>
  );
};
