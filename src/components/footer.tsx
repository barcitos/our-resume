import { Link, Stack, Typography } from '@mui/material';

export const Footer = () => (
  <Stack
    component="footer"
    direction={{ xs: 'column', sm: 'row' }}
    sx={{
      alignItems: 'center',
      borderTop: '2px solid rgba(255, 255, 255, 0.08)',
      justifyContent: 'space-between',
      paddingTop: 4,
    }}
  >
    <Typography variant="caption" sx={{ color: '#666', textAlign: 'center' }}>
      © {new Date().getFullYear()} Barbora & Patrik Šlárka. All rights reserved.
    </Typography>
    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
      <Typography variant="caption" sx={{ color: '#666' }}>
        Built with React & Material UI -{' '}
        <Link
          href="https://github.com/barcitos/our-resume"
          target="_blank"
          sx={{ color: 'white', textDecorationColor: 'inherit !important', '&:hover': { opacity: 0.8 } }}
        >
          see the code
        </Link>
      </Typography>
    </Stack>
  </Stack>
);
