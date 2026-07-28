import { Stack, Typography, useTheme } from '@mui/material';

import { RADIAL_MENU_INNER_RADIUS } from '../../constants';
import { JOBS } from '../../data';
import { Name } from '../../types';
import { getRadialMenuSectionPath } from '../../utils';

type Props = {
  activeSection?: number;
  activeTab: Name;
  onChange: (index: number) => void;
};

export const RadialMenu = ({ activeSection, activeTab, onChange }: Props) => {
  const { palette } = useTheme();

  return (
    <Stack sx={{ alignItems: 'flex-start', position: 'relative', width: 'auto', flexShrink: 0 }}>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: { xs: '320px', sm: '420px', md: '500px', lg: '540px' },
          '& path': ({ palette }) => ({
            '&.active, &.active:hover': {
              fill: palette[activeTab].main,
            },
            '&:hover': {
              fill: palette[activeTab].background,
            },
            fill: 'rgba(255, 255, 255, 0.04)',
          }),
        }}
      >
        <Stack sx={{ alignItems: 'center', position: 'absolute', width: { xs: '120px', sm: '160px', lg: '180px' } }}>
          <Typography
            sx={{
              color: 'white',
              fontSize: typeof activeSection !== 'undefined' ? { xs: '1.1rem', sm: '1.3rem', lg: '1.5rem' } : '1rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textAlign: 'center',
            }}
          >
            {typeof activeSection !== 'undefined'
              ? JOBS[activeTab][activeSection]?.company
              : 'Click on a segment to view details'}
          </Typography>
        </Stack>

        <svg viewBox="0 0 400 400">
          <circle cx="200" cy="200" r={RADIAL_MENU_INNER_RADIUS} fill="rgba(0, 0, 0, 1)" style={{ pointerEvents: 'none' }} />
          {Array.from({ length: JOBS[activeTab].length }, (_, index) => (
            <path
              key={`circle-menu-section-${index}`}
              className={activeSection === index ? 'active' : ''}
              d={getRadialMenuSectionPath(JOBS[activeTab].length, index)}
              onClick={() => onChange(index)}
              stroke={activeSection === index ? palette[activeTab].main : 'rgba(255, 255, 255, 0.2)'}
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            />
          ))}
        </svg>
      </Stack>
    </Stack>
  );
};
