import { Email as EmailIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

const CONTACT_ITEMS = [
  {
    name: 'Email',
    icon: <EmailIcon />,
    href: 'mailto:collab@slarka.com',
    color: '#ffffff',
    hoverColor: '#030303',
  },
  {
    name: 'Barbora',
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/slarka-barbora/',
    color: 'barbora.main',
    hoverColor: '#fff',
  },
  {
    name: 'Patrik',
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/patrik-slarka/',
    color: 'patrik.main',
    hoverColor: '#fff',
  },
];

export const Contact = () => (
  <Stack direction={{ xs: 'column', xl: 'row' }} sx={{ paddingX: 2, gap: 4 }}>
    <Typography variant="subtitle1" sx={{ color: '#d0d0d0', textAlign: { xs: 'center', md: 'left' } }}>
      We are always excited to collaborate on new ideas, join inspiring teams, or help bring your next big project to life.
      Whether you have a clear vision or just want to discuss a potential partnership, we are open to chat. Let's make great
      things happen!
    </Typography>

    <Stack sx={{ alignItems: { xs: 'center', xl: 'flex-end' }, gap: 1.5, justifyContent: 'center', width: '100%' }}>
      <Typography variant="overline" sx={{ color: '#fff', fontWeight: 600 }}>
        CONTACT US
      </Typography>

      <Stack direction="row" sx={{ gap: 2 }}>
        {CONTACT_ITEMS.map(({ color, href, hoverColor, icon, name }) => (
          <Button
            key={name}
            aria-label={name}
            component="a"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            title={name}
            sx={{
              background: '#43434326',
              color,
              height: 40,
              minWidth: 'auto',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
              width: 40,
              '& .MuiSvgIcon-root': {
                width: 20,
                height: 20,
                transition: 'color 0.3s ease',
              },
              '&:hover': {
                backgroundColor: color,
                color: hoverColor,
                '& .MuiSvgIcon-root': {
                  color: hoverColor,
                },
              },
            }}
          >
            {icon}
          </Button>
        ))}
      </Stack>
    </Stack>
  </Stack>
);
