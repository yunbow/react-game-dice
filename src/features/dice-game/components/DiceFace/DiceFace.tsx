import React from 'react';
import styles from './DiceFace.module.css';

interface DiceFaceProps {
  value: number;
  position: 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';
}

export const DiceFace: React.FC<DiceFaceProps> = ({ value, position }) => {
  const renderDots = () => {
    const dots = [];
    const dotPositions = getDotPositions(value);

    for (let i = 0; i < dotPositions.length; i++) {
      dots.push(
        <span
          key={i}
          className={`${styles.dot} ${styles[dotPositions[i]]}`}
        />
      );
    }

    return dots;
  };

  return (
    <div className={`${styles.diceFace} ${styles[position]}`}>
      {renderDots()}
    </div>
  );
};

const getDotPositions = (value: number): string[] => {
  switch (value) {
    case 1:
      return ['center'];
    case 2:
      return ['topLeft', 'bottomRight'];
    case 3:
      return ['topLeft', 'center', 'bottomRight'];
    case 4:
      return ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    case 5:
      return ['topLeft', 'topRight', 'center', 'bottomLeft', 'bottomRight'];
    case 6:
      return ['topLeft', 'topRight', 'centerLeft', 'centerRight', 'bottomLeft', 'bottomRight'];
    default:
      return [];
  }
};