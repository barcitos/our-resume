import { Stack, Typography } from '@mui/material';

import { TypewriterText } from './typewriter-text.tsx';

export const Intro = () => (
  <Stack sx={{ alignItems: 'center', gap: 2 }}>
    <Typography variant="caption" sx={{ color: '#888', letterSpacing: '2px' }}>
      FRONTEND & FULL-STACK ENGINEERS
    </Typography>
    <TypewriterText />
  </Stack>
);
