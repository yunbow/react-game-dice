export const DICE_CONFIG = {
  ANIMATION_DURATION: 1000,
  MAX_HISTORY_COUNT: 10,
  DICE_ROTATIONS: {
    1: { x: 0, y: 0 },      // front
    2: { x: 0, y: 90 },     // left
    3: { x: 0, y: -90 },    // right
    4: { x: -90, y: 0 },    // top
    5: { x: 90, y: 0 },     // bottom
    6: { x: 0, y: 180 },    // back
  } as const,
} as const;