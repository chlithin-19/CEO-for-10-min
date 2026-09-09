import React, { useRef, useEffect, useState, useCallback } from 'react';
import { BUDGET_VALUES, BudgetItem } from '../data/budgets';
import { 
  DEFAULT_WHEEL_CONFIG, 
  calculateTargetRotation, 
  getActiveSegmentIndex, 
  executiveEasing 
} from '../utils/wheelMath';
import { sound } from '../utils/audio';

interface BudgetWheelProps {
  isSpinning: boolean;
  onSpinStart: () => void;
  onSpinComplete: (selected: BudgetItem) => void;
  selectedBudget: BudgetItem | null;
}

export const BudgetWheel: React.FC<BudgetWheelProps> = ({
  isSpinning,
  onSpinComplete,
  selectedBudget,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentRotationRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastActiveSegmentRef = useRef<number>(-1);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedBudget) {
      const idx = BUDGET_VALUES.findIndex(b => b.id === selectedBudget.id);
      if (idx !== -1) {
        setHighlightedIndex(idx);
      }
    } else {
      setHighlightedIndex(null);
    }
  }, [selectedBudget]);

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
    const innerHubRadius = outerRadius * 0.28;

    const segmentCount = BUDGET_VALUES.length; // 8 segments (45 deg each)
    const segmentAngle = (2 * Math.PI) / segmentCount;
    const rotationRad = (rotationDeg * Math.PI) / 180;

    // Ambient Outer Shadow
    ctx.save();
    ctx.shadowColor = 'rgba(17, 17, 17, 0.2)';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 15;
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius + 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();

    // Heavy Outer Gold Bezel
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

    // Outer Dial Graduation Ticks (every 5 degrees, 8 major sector divisions)
    for (let deg = 0; deg < 360; deg += 5) {
      const isSegmentDiv = deg % 45 === 0;
      const isMajor = deg % 15 === 0;
      const tickAngle = (deg * Math.PI) / 180;
      const tickInner = outerRadius + (isSegmentDiv ? -3 : isMajor ? 0 : 2);
      const tickOuter = outerRadius + (isSegmentDiv ? 7 : isMajor ? 5 : 3.5);

      const x1 = centerX + Math.cos(tickAngle) * tickInner;
      const y1 = centerY + Math.sin(tickAngle) * tickInner;
      const x2 = centerX + Math.cos(tickAngle) * tickOuter;
      const y2 = centerY + Math.sin(tickAngle) * tickOuter;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = isSegmentDiv 
        ? '#B58A45' 
        : isMajor 
        ? '#8F6B32' 
        : 'rgba(17, 17, 17, 0.25)';
      ctx.lineWidth = isSegmentDiv ? 2 : 1;
      ctx.stroke();
    }

    // Alternating Monochromatic Segments
    const segmentColors = ['#FFFFFF', '#F6F2EA', '#EEE7DB', '#F6F2EA'];

    // Draw 8 Segments
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
        // High stakes gold highlight
        const goldGrad = ctx.createRadialGradient(centerX, centerY, innerHubRadius, centerX, centerY, outerRadius);
        goldGrad.addColorStop(0, '#FFFFFF');
        goldGrad.addColorStop(0.5, '#FBF6E9');
        goldGrad.addColorStop(1, '#E8D4A8');
        ctx.fillStyle = goldGrad;
      } else {
        ctx.fillStyle = segmentColors[i % segmentColors.length];
      }
      ctx.fill();

      // Divider line (thick champagne gold)
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(startAngle) * outerRadius, centerY + Math.sin(startAngle) * outerRadius);
      ctx.strokeStyle = isSelected ? '#8F6B32' : '#B58A45';
      ctx.lineWidth = isSelected ? 3 : 1.75;
      ctx.stroke();

      // Stud at segment boundary
      const studX = centerX + Math.cos(startAngle) * (outerRadius - 5);
      const studY = centerY + Math.sin(startAngle) * (outerRadius - 5);
      ctx.beginPath();
      ctx.arc(studX, studY, 2.5, 0, 2 * Math.PI);
      ctx.fillStyle = isSelected ? '#8F6B32' : '#B58A45';
      ctx.fill();

      // Render Currency Label (Large, bold, high contrast)
      const midAngle = startAngle + segmentAngle / 2;
      const budget = BUDGET_VALUES[i];
      const text = budget.label;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(midAngle);

      // Radial position
      const textRadius = outerRadius * 0.65;
      ctx.translate(textRadius, 0);

      // Tangential rotation
      ctx.rotate(Math.PI / 2);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.font = `800 16px "Inter", sans-serif`;
      ctx.fillStyle = '#111111';

      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowBlur = 3;

      ctx.fillText(text, 0, 0);

      ctx.restore();
    }

    // Central Executive Hub
    ctx.save();
    ctx.shadowColor = 'rgba(17, 17, 17, 0.25)';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#111111';
    ctx.fill();
    ctx.restore();

    // Hub Bezel
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#B58A45';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerHubRadius - 5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(181, 138, 69, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Central Monogram: ₹ CAPITAL
    ctx.save();
    ctx.translate(centerX, centerY);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `800 20px "Inter", "Playfair Display", serif`;
    ctx.fillStyle = '#B58A45';
    ctx.fillText('₹', 0, -5);

    ctx.font = `700 9px "Inter", sans-serif`;
    ctx.fillStyle = '#FFFFFF';
    ctx.letterSpacing = '1.5px';
    ctx.fillText('CAPITAL', 0, 11);

    ctx.restore();

    // Top Pointer (12 o'clock needle pointing down)
    const pointerTopY = centerY - outerRadius - 16;
    const pointerTipY = centerY - outerRadius + 10;

    ctx.save();
    ctx.shadowColor = 'rgba(17, 17, 17, 0.35)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;

    ctx.beginPath();
    ctx.moveTo(centerX - 10, pointerTopY);
    ctx.lineTo(centerX + 10, pointerTopY);
    ctx.lineTo(centerX, pointerTipY);
    ctx.closePath();

    const needleGrad = ctx.createLinearGradient(centerX - 10, pointerTopY, centerX + 10, pointerTopY);
    needleGrad.addColorStop(0, '#D4B376');
    needleGrad.addColorStop(0.5, '#B58A45');
    needleGrad.addColorStop(1, '#8F6B32');
    ctx.fillStyle = needleGrad;
    ctx.fill();

    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, pointerTopY + 3, 3.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#111111';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, pointerTopY + 3, 2, 0, 2 * Math.PI);
    ctx.fillStyle = '#B58A45';
    ctx.fill();

    ctx.restore();

    ctx.restore();
  }, []);

  // Animate Budget Wheel
  useEffect(() => {
    if (!isSpinning) return;

    setHighlightedIndex(null);

    // Randomly select one budget item
    const targetIdx = Math.floor(Math.random() * BUDGET_VALUES.length);
    const targetBudget = BUDGET_VALUES[targetIdx];

    const startRotation = currentRotationRef.current;
    const finalRotation = calculateTargetRotation(
      startRotation,
      targetIdx,
      BUDGET_VALUES.length, // 8 segments
      DEFAULT_WHEEL_CONFIG.minSpins,
      DEFAULT_WHEEL_CONFIG.maxSpins
    );

    const totalDistance = finalRotation - startRotation;
    const duration = 4600; // 4.6 seconds for suspenseful budget allocation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = executiveEasing(progress);

      const currentAngle = startRotation + totalDistance * easedProgress;
      currentRotationRef.current = currentAngle;

      const currentSegment = getActiveSegmentIndex(currentAngle, BUDGET_VALUES.length);
      if (currentSegment !== lastActiveSegmentRef.current) {
        lastActiveSegmentRef.current = currentSegment;
        const velocityRatio = 1 - easedProgress;
        sound.playTick(velocityRatio);
      }

      drawWheel(currentAngle, null);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        currentRotationRef.current = finalRotation;
        setHighlightedIndex(targetIdx);
        drawWheel(finalRotation, targetIdx);
        sound.playDecisionLocked();
        onSpinComplete(targetBudget);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSpinning, drawWheel, onSpinComplete]);

  // Initial draw & redraw
  useEffect(() => {
    drawWheel(currentRotationRef.current, highlightedIndex);

    const handleResize = () => {
      drawWheel(currentRotationRef.current, highlightedIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawWheel, highlightedIndex]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[580px] lg:h-[580px] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
