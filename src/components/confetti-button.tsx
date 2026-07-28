import { MouseEvent, useCallback } from 'react';

import { IconButton, useTheme } from '@mui/material';
import confetti from 'canvas-confetti';

export const ConfettiButton = () => {
  const { palette } = useTheme();

  const handleConfetti = useCallback(
    ({ currentTarget }: MouseEvent<HTMLElement>) => {
      const { height, left, top, width } = currentTarget.getBoundingClientRect();
      const isTouch = window.matchMedia('(pointer: coarse)').matches;

      confetti({
        colors: [palette.barbora.main, palette.patrik.main, '#ffffff', '#daf4ed', '#ffbd44', '#00ca4e'],
        disableForReducedMotion: true,
        origin: {
          x: isTouch ? 0.5 : (left + width / 2) / window.innerWidth,
          y: isTouch ? 0.6 : (top + height / 2) / window.innerHeight,
        },
        particleCount: isTouch ? 60 : 100,
        spread: isTouch ? 60 : 70,
      });
    },
    [palette],
  );

  return (
    <IconButton
      disableRipple
      onClick={handleConfetti}
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
        transition: 'all 0.2s ease-in-out',
        '&:hover': { transform: 'scale(1.1)' },
      }}
    >
      🎉
    </IconButton>
  );
};
