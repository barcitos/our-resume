import { Stack, Typography, useTheme } from '@mui/material';

const VALUES_DATA = [
  {
    title: 'TRANSPARENCY',
    description: 'We believe in being open about our process and flagging blockers early, so we can build trust together.',
  },
  {
    title: 'COMMUNICATION',
    description:
      'We focus on being clear and proactive, ensuring the team has the right context without needing a meeting for everything.',
  },
  {
    title: 'ACCOUNTABILITY',
    description: 'We take real pride in our work. We make sure our code is solid, tested, and something we are proud of.',
  },
  {
    title: 'FLEXIBILITY',
    description: 'We stay flexible - from a structured, long-term sprint, to a fast-paced, solo task.',
  },
];

export const Values = () => {
  const { palette } = useTheme();

  return (
    <Stack direction={{ xs: 'column', xl: 'row' }} sx={{ gap: 3 }}>
      {VALUES_DATA.map(({ description, title }) => (
        <Stack
          key={title}
          sx={{
            flex: 1,
            gap: 2,
            padding: 1.5,
            ':nth-of-type(odd) > h6': { background: `linear-gradient(150deg, #fff 10%, ${palette.patrik.main} 70%) text` },
            ':nth-of-type(even) > h6': { background: `linear-gradient(150deg, #fff 10%, ${palette.barbora.main} 70%) text` },
            '&, & > *': { transition: 'transform 0.4s ease' },
            '&:hover': { transform: 'translateY(-4px)' },
            '&:hover > *': { transform: 'scale(0.96) translateY(4px)' },
          }}
        >
          <Typography variant="h6" sx={{ color: 'transparent', fontWeight: 700, width: 'fit-content' }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#b0b0b0' }}>
            {description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
