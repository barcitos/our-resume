import { useEffect, useRef } from 'react';

import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const TEXT = 'We shape, build, and scale complete digital products together.';

export const TypewriterText = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(cursorRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7, repeat: -1, ease: 'steps(1)' })
      .to(textRef.current, { duration: 5, text: { value: TEXT }, ease: 'none' });
  }, []);

  return (
    <Box sx={{ height: 80, marginX: 'auto', maxWidth: 800, textAlign: 'center', width: '100%' }}>
      <Typography
        variant="h1"
        ref={textRef}
        sx={{
          color: 'white',
          display: 'inline',
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 600,
          lineHeight: 1.2,
          textTransform: 'uppercase',
        }}
      />
      <Box
        ref={cursorRef}
        sx={{
          bgcolor: 'white',
          display: 'inline-block',
          height: '22px',
          marginBottom: '-1px',
          width: '3px',
        }}
      />
    </Box>
  );
};
