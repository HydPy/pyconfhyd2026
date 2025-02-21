'use client';
import { useState, useEffect } from 'react';

export const Confetti = ({
  trigger,
  count = 50,
  colors = [
    '#ff0000',
    '#ff7300',
    '#ffcc00',
    '#33cc33',
    '#0099ff',
    '#9900cc',
    '#ff3399',
    '#ff6666',
    '#33ffcc',
    '#ffccff',
    '#ffff66',
    '#00ff99',
    '#ff9933',
  ],
  sizeRange = [5, 15],
  durationRange = [2, 5],
}) => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  const launchConfetti = () => {
    const confettiArray = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      duration:
        Math.random() * (durationRange[1] - durationRange[0]) +
        durationRange[0] +
        's',
      size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0] + 'px',
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfettiPieces(confettiArray);
  };

  useEffect(() => {
    if (trigger) {
      launchConfetti();
    }
  }, [trigger]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {confettiPieces.map(({ id, left, duration, size, color }) => (
        <div
          key={id}
          className="absolute confetti"
          style={{
            left,
            width: size,
            height: size,
            backgroundColor: color,
            animationDuration: duration,
          }}
        />
      ))}
    </div>
  );
};
