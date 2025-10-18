export interface DiceHistory {
  id: string;
  value: number;
  timestamp: Date;
  rollNumber: number;
}

export interface DiceGameState {
  currentValue: number;
  rollCount: number;
  isRolling: boolean;
  history: DiceHistory[];
}

export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

export interface DiceRotation {
  x: number;
  y: number;
  z?: number;
}