import { ReactNode } from 'react';

import { Stack } from '@mui/material';

import { Title } from './title.tsx';

type Props = {
  children: ReactNode;
  hasIcon?: boolean;
  title: string;
};

export const Section = ({ children, hasIcon = false, title }: Props) => (
  <Stack sx={{ gap: { xs: 2, md: 4 } }}>
    <Title hasIcon={hasIcon}>{title}</Title>
    {children}
  </Stack>
);
