import React from 'react';
import { Text } from '../../../../components/Text';
import { DiceHistory } from '../../types';
import { formatTime } from '../../../../utils';
import styles from './ScoreBoard.module.css';

interface ScoreBoardProps {
  rollCount: number;
  history: DiceHistory[];
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ rollCount, history }) => {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.scoreItem}>
        <Text variant="body">回数:</Text>
        <Text variant="body">{rollCount}</Text>
      </div>
      <div className={styles.scoreHistory}>
        <Text variant="h3">履歴</Text>
        <ul className={styles.historyList}>
          {history.map((item) => (
            <li key={item.id} className={styles.historyItem}>
              <Text variant="caption">
                {item.rollNumber}回目: {item.value} ({formatTime(item.timestamp)})
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};