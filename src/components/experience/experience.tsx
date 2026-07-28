import { useState, useCallback } from 'react';

import { Stack, Typography } from '@mui/material';

import { Name } from '../../types';

import { DesktopContent } from './desktop-content';
import { MobileList } from './mobile-list';
import { RadialMenu } from './radial-menu';
import { Tabs } from './tabs';

export const Experience = () => {
  const [activeSection, setActiveSection] = useState<number>();
  const [activeTab, setActiveTab] = useState<Name>('barbora');

  const handleSectionChange = useCallback((index: number) => {
    setActiveSection(index);
  }, []);

  const handleTabChange = useCallback((newTab: Name) => {
    setActiveTab(newTab);
    setActiveSection(undefined);
  }, []);

  return (
    <>
      <Stack sx={{ display: { xs: 'none', xl: 'flex' }, gap: 4 }}>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: '#fff', marginBottom: 7 }}>
            Take a look at our journeys so far, what we built, using which technologies. Click on our names to learn more.
          </Typography>
          <Tabs onChange={handleTabChange} tab={activeTab} />
        </Stack>
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <RadialMenu activeSection={activeSection} activeTab={activeTab} onChange={handleSectionChange} />
          <DesktopContent activeSection={activeSection} activeTab={activeTab} />
        </Stack>
      </Stack>
      <MobileList activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  );
};
