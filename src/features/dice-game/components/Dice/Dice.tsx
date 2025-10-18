import React from 'react';
import { DiceFace } from '../DiceFace';
import { DiceValue } from '../../types';
import { getDiceRotationStyle } from '../../../../utils';
import styles from './Dice.module.css';

interface DiceProps {
  value: DiceValue;
  isRolling: boolean;
}

export const Dice: React.FC<DiceProps> = ({ value, isRolling }) => {
  const diceStyle = {
    transform: getDiceRotationStyle(value),
  };

  return (
    <div className={styles.diceContainer}>
      <div
        className={`${styles.dice} ${isRolling ? styles.rolling : ''}`}
        style={diceStyle}
      >
        <DiceFace value={1} position="front" />
        <DiceFace value={6} position="back" />
        <DiceFace value={3} position="right" />
        <DiceFace value={2} position="left" />
        <DiceFace value={4} position="top" />
        <DiceFace value={5} position="bottom" />
      </div>
    </div>
  );
};