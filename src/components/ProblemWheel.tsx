import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Domain, ProblemStatement } from '../data/domains';
import { 
  DEFAULT_WHEEL_CONFIG, 
  calculateTargetRotation, 
  getActiveSegmentIndex, 
  executiveEasing 
} from '../utils/wheelMath';
import { sound } from '../utils/audio';

interface ProblemWheelProps {
  domain: Domain;
  isSpinning: boolean;
  onSpinStart: () => void;
  onSpinComplete: (selected: ProblemStatement) => void;
  selectedProblem: ProblemStatement | null;
  compact?: boolean;
}

export const ProblemWheel: React.FC<ProblemWheelProps> = ({
  domain,
  isSpinning,
  onSpinComplete,
  selectedProblem,
  compact = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentRotationRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastActiveSegmentRef = useRef<number>(-1);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  // Synchronize highlighted index when selectedProblem changes
  useEffect(() => {
    if (selectedProblem) {
      const idx = domain.problems.findIndex(p => p.id === selectedProblem.id);
      if (idx !== -1) {
        setHighlightedIndex(idx);
      }
    } else {
      setHighlightedIndex(null);
    }
  }, [selectedProblem, domain]);

  // Render the light luxury wheel onto the canvas
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
    const outerRadius = Math.min(centerX, centerY) - 24; // Breathing room for pointer and bezel
    const innerHubRadius = outerRadius * 0.28;

    const segmentCount = domain.problems.length;
    const segmentAngle = (2 * Math.PI) / segmentCount;
    const rotationRad = (rotationDeg * Math.PI) / 180;

    // Outer subtle ambient glow
    const ambientGlow = ctx.createRadialGradient(centerX, centerY, innerHubRadius, centerX, centerY, outerRadius * 1.15);
    ambientGlow.addColorStop(0, 'rgba(184, 149, 85, 0.04)');
    ambientGlow.addColorStop(0.8, 'rgba(241, 238, 231, 0.4)');
    ambientGlow.addColorStop(1, 'rgba(247, 245, 240, 0)');
    ctx.fillStyle = ambientGlow;
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius * 1.15, 0, 2 * Math.PI);
    ctx.fill();

    // Wheel outer soft shadow
    ctx.save();
    ctx.shadowColor = 'rgba(40, 35, 25, 0.12)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 12;
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();

    // Outer Bezel Rim (Crisp white & Champagne gold hairline)
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 4, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(184, 149, 85, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 1, 0, 2 * Math.PI);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Fine tick marks on outer dial (every 5 degrees)
    for (let deg = 0; deg < 360; deg += 5) {
      const isMajor = deg % 30 === 0;
      const isSegmentDiv = deg % 60 === 0;
      const tickAngle = (deg * Math.PI) / 180;
      const tickInner = outerRadius + (isSegmentDiv ? -2 : isMajor ? 0 : 2);
      const tickOuter = outerRadius + (isSegmentDiv ? 5 : isMajor ? 4 : 3);

      const x1 = centerX + Math.cos(tickAngle) * tickInner;
      const y1 = centerY + Math.sin(tickAngle) * tickInner;
      const x2 = centerX + Math.cos(tickAngle) * tickOuter;
      const y2 = centerY + Math.sin(tickAngle) * tickOuter;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = isSegmentDiv 
        ? '#B89555' 
        : isMajor 
        ? 'rgba(184, 149, 85, 0.45)' 
        : 'rgba(150, 146, 138, 0.25)';
      ctx.lineWidth = isSegmentDiv ? 1.5 : 1;
      ctx.stroke();
    }

    // Monochromatic Ivory/White Palette for Segments:
    // #FFFFFF, #F3F0E9, #ECE8DF
    const segmentColors = ['#FFFFFF', '#F3F0E9', '#ECE8DF'];

    // Draw the 6 segments
    for (let i = 0; i < segmentCount; i++) {
      const startAngle = rotationRad + i * segmentAngle;
      const endAngle = startAngle + segmentAngle;
      const isSelected = activeHighlight === i;

      // Slice background
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.closePath();

      if (isSelected) {
        // Selected highlight: warm subtle gold wash
        const goldGrad = ctx.createRadialGradient(centerX, centerY, innerHubRadius, centerX, centerY, outerRadius);
        goldGrad.addColorStop(0, '#FFFFFF');
        goldGrad.addColorStop(0.6, '#FAF5EA');
        goldGrad.addColorStop(1, '#F3EAD3');
        ctx.fillStyle = goldGrad;
      } else {
        ctx.fillStyle = segmentColors[i % segmentColors.length];
      }
      ctx.fill();

      // Divider line between segments
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(startAngle) * outerRadius, centerY + Math.sin(startAngle) * outerRadius);
      ctx.strokeStyle = isSelected 
        ? '#B89555' 
        : 'rgba(184, 149, 85, 0.4)';
      ctx.lineWidth = isSelected ? 2 : 1;
      ctx.stroke();

      // Outer stud on segment vertex
      const studX = centerX + Math.cos(startAngle) * (outerRadius - 4);
      const studY = centerY + Math.sin(startAngle) * (outerRadius - 4);
      ctx.beginPath();
      ctx.arc(studX, studY, 2, 0, 2 * Math.PI);
      ctx.fillStyle = isSelected ? '#B89555' : 'rgba(184, 149, 85, 0.6)';
      ctx.fill();

      // Render concise wheel text along the radial bisector
      const midAngle = startAngle + segmentAngle / 2;
      const problem = domain.problems[i];
      const text = problem.wheelLabel;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(midAngle);

      // Text position along radius
      const textRadius = outerRadius * 0.64;
      ctx.translate(textRadius, 0);

      // Rotate text by 90deg (tangential orientation)
      ctx.rotate(Math.PI / 2);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Increased font size: 13-15px desktop
      const fontSize = compact ? 11.5 : 14;
      ctx.font = isSelected 
        ? `600 ${fontSize}px "Inter", sans-serif` 
        : `600 ${fontSize}px "Inter", sans-serif`;
      ctx.fillStyle = isSelected ? '#171717' : '#171717';

      // High readability with subtle clean text shadow
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 2;

      // Handle multi-word text wrapping elegantly across two lines
      const words = text.split(' ');
      if (words.length > 2 && text.length > 13) {
        const mid = Math.ceil(words.length / 2);
        const line1 = words.slice(0, mid).join(' ');
        const line2 = words.slice(mid).join(' ');
        ctx.fillText(line1, 0, -8);
        ctx.fillText(line2, 0, 8);
      } else if (words.length === 2 && text.length > 12) {
        ctx.fillText(words[0], 0, -8);
        ctx.fillText(words[1], 0, 8);
      } else {
        ctx.fillText(text, 0, 0);
      }

      ctx.restore();
    }

    // Inner Hub Bezel and Disc (Pure crisp white with gold concentric ring)
    ctx.save();
    ctx.shadowColor = 'rgba(40, 35, 25, 0.1)';
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();

    // Hub concentric rings
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#B89555';
    ctx.lineWidth = 1.75;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius - 4, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(184, 149, 85, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Central Executive Monogram
    ctx.save();
    ctx.translate(centerX, centerY);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const hubFontSize = compact ? 11 : 14;
    ctx.font = `700 ${hubFontSize}px "Cinzel", "Playfair Display", serif`;
    ctx.fillStyle = '#8F713D';
    ctx.fillText('CEO', 0, -3.5);

    const subHubFontSize = compact ? 7 : 8;
    ctx.font = `500 ${subHubFontSize}px "Inter", sans-serif`;
    ctx.fillStyle = '#66635D';
    ctx.fillText('DECISION', 0, 9);

    // Center focal point
    ctx.beginPath();
    ctx.arc(0, -12, 1.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#B89555';
    ctx.fill();

    ctx.restore();

    // Draw Top Pointer (12 o'clock needle pointing down into the wheel)
    const pointerTopY = centerY - outerRadius - 13;
    const pointerTipY = centerY - outerRadius + 8;

    ctx.save();
    ctx.shadowColor = 'rgba(40, 35, 25, 0.25)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 3;

    ctx.beginPath();
    ctx.moveTo(centerX - 8, pointerTopY);
    ctx.lineTo(centerX + 8, pointerTopY);
    ctx.lineTo(centerX, pointerTipY);
    ctx.closePath();

    const needleGrad = ctx.createLinearGradient(centerX - 8, pointerTopY, centerX + 8, pointerTopY);
    needleGrad.addColorStop(0, '#D4B376');
    needleGrad.addColorStop(0.5, '#B89555');
    needleGrad.addColorStop(1, '#8F713D');
    ctx.fillStyle = needleGrad;
    ctx.fill();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Top pivot jewel
    ctx.beginPath();
    ctx.arc(centerX, pointerTopY + 2.5, 2.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.restore();

    ctx.restore();
  }, [domain, compact]);

  // Perform rotation animation when isSpinning triggers
  useEffect(() => {
    if (!isSpinning) return;

    setHighlightedIndex(null);

    // Randomly select one problem from the current domain
    const targetIdx = Math.floor(Math.random() * domain.problems.length);
    const targetProblem = domain.problems[targetIdx];

    const startRotation = currentRotationRef.current;
    const finalRotation = calculateTargetRotation(
      startRotation,
      targetIdx,
      domain.problems.length,
      DEFAULT_WHEEL_CONFIG.minSpins,
      DEFAULT_WHEEL_CONFIG.maxSpins
    );

    const totalDistance = finalRotation - startRotation;
    const duration = DEFAULT_WHEEL_CONFIG.durationMs;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = executiveEasing(progress);

      const currentAngle = startRotation + totalDistance * easedProgress;
      currentRotationRef.current = currentAngle;

      // Track active segment for audio clicker
      const currentSegment = getActiveSegmentIndex(currentAngle, domain.problems.length);
      if (currentSegment !== lastActiveSegmentRef.current) {
        lastActiveSegmentRef.current = currentSegment;
        const velocityRatio = 1 - easedProgress;
        sound.playTick(velocityRatio);
      }

      drawWheel(currentAngle, null);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Wheel has landed cleanly!
        currentRotationRef.current = finalRotation;
        setHighlightedIndex(targetIdx);
        drawWheel(finalRotation, targetIdx);
        sound.playDecisionLocked();
        onSpinComplete(targetProblem);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSpinning, domain, drawWheel, onSpinComplete]);

  // Initial draw & redraw on domain change or window resize
  useEffect(() => {
    drawWheel(currentRotationRef.current, highlightedIndex);

    const handleResize = () => {
      drawWheel(currentRotationRef.current, highlightedIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawWheel, domain, highlightedIndex]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Canvas Wheel Container - LARGE 500-600px desktop */}
      <div className={`relative flex items-center justify-center transition-all duration-500 ${
        compact 
          ? 'w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px]' 
          : 'w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] lg:w-[560px] lg:h-[560px]'
      }`}>
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
