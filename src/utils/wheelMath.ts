// Deterministic Decision Wheel Physics & Mathematical Geometry

export interface WheelConfig {
  segmentCount: number;
  minSpins: number;
  maxSpins: number;
  durationMs: number;
}

export const DEFAULT_WHEEL_CONFIG: WheelConfig = {
  segmentCount: 6,
  minSpins: 5,
  maxSpins: 7,
  durationMs: 4800, // 4.8 seconds for suspenseful executive deliberation
};

/**
 * Normalizes an angle in degrees to [0, 360)
 */
export function normalizeAngle(angle: number): number {
  const mod = angle % 360;
  return mod < 0 ? mod + 360 : mod;
}

/**
 * Returns which segment is currently directly beneath the pointer (at 12 o'clock / 270 degrees).
 * Segment 0 spans [0, 60), Segment 1 spans [60, 120), etc.
 */
export function getActiveSegmentIndex(rotationDegrees: number, segmentCount: number = 6): number {
  const anglePerSegment = 360 / segmentCount;
  // Pointer is at top = 270 degrees
  const pointerAngle = 270;
  const localAngleUnderPointer = normalizeAngle(pointerAngle - rotationDegrees);
  const index = Math.floor(localAngleUnderPointer / anglePerSegment);
  return Math.min(Math.max(index, 0), segmentCount - 1);
}

/**
 * Calculates the exact destination rotation angle in degrees so that the target segment
 * lands squarely beneath the top pointer (270 degrees), plus random integer full revolutions.
 *
 * @param currentRotation Current total accumulated rotation angle in degrees
 * @param targetIndex The segment index (0 to 5) that must be selected
 * @param segmentCount Total number of segments (6)
 * @param minRevolutions Minimum full 360 turns
 * @param maxRevolutions Maximum full 360 turns
 */
export function calculateTargetRotation(
  currentRotation: number,
  targetIndex: number,
  segmentCount: number = 6,
  minRevolutions: number = 5,
  maxRevolutions: number = 7
): number {
  const anglePerSegment = 360 / segmentCount;
  const pointerAngle = 270; // 12 o'clock

  // Segment center in wheel local coordinates
  const segmentCenter = targetIndex * anglePerSegment + anglePerSegment / 2;

  // Add a slight intentional jitter within +/- 15 degrees (staying well within the 60 deg segment)
  const maxJitter = (anglePerSegment / 2) * 0.5; // +/- 15 deg
  const jitter = (Math.random() - 0.5) * (maxJitter * 2);

  const desiredLocalAngle = segmentCenter + jitter;

  // We want: normalizeAngle(pointerAngle - finalRotation) == desiredLocalAngle
  // => finalRotation = pointerAngle - desiredLocalAngle (modulo 360)
  const targetBaseAngle = normalizeAngle(pointerAngle - desiredLocalAngle);
  const currentBaseAngle = normalizeAngle(currentRotation);

  let deltaAngle = targetBaseAngle - currentBaseAngle;
  if (deltaAngle < 0) {
    deltaAngle += 360;
  }

  // Randomize full revolutions between min and max
  const fullTurns = minRevolutions + Math.floor(Math.random() * (maxRevolutions - minRevolutions + 1));
  const totalDelta = deltaAngle + fullTurns * 360;

  return currentRotation + totalDelta;
}

/**
 * Sophisticated mechanical easing function:
 * Short, smooth acceleration (t: 0 -> 0.12) followed by heavy, high-inertia mechanical deceleration
 */
export function executiveEasing(t: number): number {
  // Clamp t to [0, 1]
  const clampedT = Math.max(0, Math.min(1, t));

  // High-order polynomial deceleration curve for realistic mechanical weight:
  // Starts accelerating quickly, coasts, then dramatically slows down with steady friction
  return 1 - Math.pow(1 - clampedT, 4.6);
}
