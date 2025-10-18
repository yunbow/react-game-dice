import React from 'react';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import styles from './DiceControls.module.css';

interface DiceControlsProps {
  currentValue: number;
  isRolling: boolean;
  onRoll: () => void;
}

export const DiceControls: React.FC<DiceControlsProps> = ({
  currentValue,
  isRolling,
  onRoll,
}) => {
  return (
    <div className={styles.controls}>
      <Button onClick={onRoll} disabled={isRolling}>
        サイコロを振る
      </Button>
      <div className={styles.result}>
        <Text variant="body">
          結果: <span className={styles.resultValue}>{currentValue}</span>
        </Text>
      </div>
    </div>
  );
};