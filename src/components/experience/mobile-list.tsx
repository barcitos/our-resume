import { Button, Stack, Typography } from '@mui/material';

import { JOBS } from '../../data';
import { Name } from '../../types';

type TabButtonProps = {
  activeTab: Name;
  name: Name;
  onClick: (name: Name) => void;
};

const TabButton = ({ activeTab, name, onClick }: TabButtonProps) => (
  <Button
    disableRipple
    onClick={() => onClick(name)}
    sx={{
      backgroundColor: activeTab === name ? `${name}.background` : 'transparent',
      borderRadius: 0,
      color: activeTab === name ? `${name}.main` : '#fff',
      flex: 1,
      fontSize: '0.9rem',
      fontWeight: 'bold',
      paddingY: 1.5,
      textTransform: 'capitalize',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: `${name}.main`,
        color: '#fff',
      },
    }}
  >
    {name}
  </Button>
);

type Props = {
  activeTab: Name;
  onTabChange: (newTab: Name) => void;
};

export const MobileList = ({ activeTab, onTabChange }: Props) => (
  <Stack sx={{ display: { xs: 'flex', xl: 'none' }, gap: 3 }}>
    <Stack direction="row" sx={{ gap: 0, border: '2px solid rgba(255,255,255,0.1)' }}>
      <TabButton activeTab={activeTab} name="barbora" onClick={onTabChange} />
      <TabButton activeTab={activeTab} name="patrik" onClick={onTabChange} />
    </Stack>

    {JOBS[activeTab].map((job) => (
      <Stack
        key={job.id}
        sx={{
          background: 'linear-gradient(135deg, rgba(20,20,20,0.95), rgba(40,40,40,0.95))',
          borderLeft: `5px solid ${activeTab}.main`,
          padding: 3,
        }}
      >
        <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, textTransform: 'uppercase' }}>
          {job.company} — {job.sector}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: `${activeTab}.main`, fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 1 }}
        >
          {job.project}
        </Typography>
        <Typography variant="body2" sx={{ color: '#ccc', marginBottom: 2 }}>
          {job.description}
        </Typography>
        <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, marginBottom: 1, textTransform: 'uppercase' }}>
          Tech Stack
        </Typography>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
          {job.techStack.map((tech) => (
            <Typography
              key={tech}
              variant="caption"
              sx={{
                backgroundColor: `${activeTab}.background`,
                color: 'white',
                letterSpacing: 0.5,
                paddingX: 1.5,
                paddingY: 0.5,
                textTransform: 'uppercase',
              }}
            >
              {tech}
            </Typography>
          ))}
        </Stack>
      </Stack>
    ))}
  </Stack>
);
