import { Link, Stack, Typography } from '@mui/material';

const PULSE_KEYFRAMES = {
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 0 rgba(144, 238, 144, 0.7)',
    },
    '70%': {
      transform: 'scale(1)',
      boxShadow: '0 0 0 8px rgba(144, 238, 144, 0)',
    },
    '100%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 0 rgba(144, 238, 144, 0)',
    },
  },
};

export const Badge = () => (
  <Stack
    direction="row"
    sx={{
      justifyContent: 'space-between',
      position: 'fixed',
      top: 25,
      left: 30,
      right: 30,
      display: { xs: 'none', lg: 'flex' },
      ...PULSE_KEYFRAMES,
    }}
  >
    <Typography
      component="span"
      variant="caption"
      sx={{
        backgroundColor: '#33333350',
        color: '#fff',
        display: 'inline-flex',
        fontWeight: 'bold',
        padding: '8px 12px',
        textAlign: 'center',
      }}
    >
      REMOTE
      <br />
      🇨🇿 CZECHIA
    </Typography>
    <Link href="mailto:collab@slarka.com" target="_blank">
      <Typography
        component="span"
        variant="caption"
        sx={{
          animation: 'pulse 2s infinite',
          backgroundColor: '#90ee90',
          color: '#030303',
          display: 'inline-flex',
          fontWeight: 'bold',
          padding: '8px 12px',
          textAlign: 'center',
        }}
      >
        AVAILABLE NOW
        <br /> REACH OUT
      </Typography>
    </Link>
  </Stack>
);
