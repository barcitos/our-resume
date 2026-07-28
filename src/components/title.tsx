import { ReactNode } from 'react';

import { Stack, Typography } from '@mui/material';

import { ConfettiButton } from './confetti-button';

type Props = {
  children: ReactNode;
  hasIcon?: boolean;
};

export const Title = ({ children, hasIcon = false }: Props) => (
  <Stack
    direction="row"
    sx={{
      background: 'rgb(67 67 67 / 0.20)',
      borderLeft: '3px solid',
      borderImage: 'linear-gradient(to bottom, #daf4ed, #ffffff) 1',
      marginBottom: 3,
      paddingLeft: { xs: 2, md: 3 },
      paddingY: { xs: 1, md: 1.5 },
      position: 'relative',
    }}
  >
    <Stack direction="row" sx={{ alignItems: 'center', flexWrap: 'wrap', gap: { xs: 1, md: 2 }, width: '100%' }}>
      <Typography
        sx={{
          color: '#fff',
          fontFamily: '"Courier New", monospace',
          fontSize: { xs: '2rem', sm: '2.75rem', md: '4rem' },
          fontWeight: 600,
          wordBreak: 'break-word',
        }}
      >
        {children}
      </Typography>
      {hasIcon && <ConfettiButton />}
    </Stack>
  </Stack>
);
