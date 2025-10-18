import React, { useEffect } from 'react';
import { Text } from '../../../components/Text';
import { Dice } from '../components/Dice';
import { DiceControls } from '../components/DiceControls';
import { ScoreBoard } from '../components/ScoreBoard';
import { useDiceGame } from '../useDiceGame';
import styles from './DiceGame.module.css';

export const DiceGame: React.FC = () => {
  const { currentValue, rollCount, isRolling, history, rollDice } = useDiceGame();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        rollDice();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [rollDice]);

  return (
    <div className={styles.container}>
      <Text variant="h1">サイコロゲーム</Text>

      <Dice value={currentValue as any} isRolling={isRolling} />

      <DiceControls
        currentValue={currentValue}
        isRolling={isRolling}
        onRoll={rollDice}
      />

      <ScoreBoard rollCount={rollCount} history={history} />
    </div>
  );
};