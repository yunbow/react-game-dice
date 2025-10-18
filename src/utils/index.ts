import { DiceValue } from '../features/dice-game/types';
import { DICE_CONFIG } from '../Config';

export const getDiceRotationStyle = (value: DiceValue): string => {
  const rotation = DICE_CONFIG.DICE_ROTATIONS[value];
  return `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString();
};