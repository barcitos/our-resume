import { Button, Stack } from '@mui/material';

import { Name } from '../../types';

type TabButtonProps = {
  activeTab: Name;
  name: Name;
  onClick: (name: Name) => void;
};

const Tab = ({ activeTab, name, onClick }: TabButtonProps) => (
  <Button
    disableRipple
    onClick={() => onClick(name)}
    sx={{
      backgroundColor: activeTab === name ? `${name}.main` : 'transparent',
      borderRadius: 0,
      color: activeTab === name ? '#070707' : '#e8e8e8',
      flex: 1,
      fontWeight: 'bold',
      letterSpacing: '2px',
      py: 2,
      transition: 'all 0.3s ease',
      textTransform: 'capitalize',
      '&:hover': { backgroundColor: `${name}.main`, color: '#070707' },
    }}
  >
    {name}
  </Button>
);

type Props = {
  onChange: (newTab: Name) => void;
  tab: Name;
};

export const Tabs = ({ onChange, tab }: Props) => (
  <Stack direction="row" sx={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)' }}>
    <Tab name="barbora" activeTab={tab} onClick={onChange} />
    <Tab name="patrik" activeTab={tab} onClick={onChange} />
  </Stack>
);
