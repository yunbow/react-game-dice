import { useState, useCallback } from 'react';
import { DiceGameState, DiceHistory, DiceValue } from './types';
import { DICE_CONFIG } from '../../Config';

export const useDiceGame = () => {
  const [gameState, setGameState] = useState<DiceGameState>({
    currentValue: 1,
    rollCount: 0,
    isRolling: false,
    history: [],
  });

  const generateRandomDiceValue = (): DiceValue => {
    return (Math.floor(Math.random() * 6) + 1) as DiceValue;
  };

  const rollDice = useCallback(() => {
    if (gameState.isRolling) return;

    setGameState(prev => ({ ...prev, isRolling: true }));

    setTimeout(() => {
      const newValue = generateRandomDiceValue();
      const newHistory: DiceHistory = {
        id: Date.now().toString(),
        value: newValue,
        timestamp: new Date(),
        rollNumber: gameState.rollCount + 1,
      };

      setGameState(prev => ({
        currentValue: newValue,
        rollCount: prev.rollCount + 1,
        isRolling: false,
        history: [newHistory, ...prev.history].slice(0, DICE_CONFIG.MAX_HISTORY_COUNT),
      }));
    }, DICE_CONFIG.ANIMATION_DURATION);
  }, [gameState.isRolling, gameState.rollCount]);

  return {
    ...gameState,
    rollDice,
  };
};