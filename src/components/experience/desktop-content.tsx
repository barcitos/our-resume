import { useMemo } from 'react';

import { Divider, Link, Stack, Typography } from '@mui/material';

import { JOBS } from '../../data';
import { Name } from '../../types';

type Props = {
  activeSection?: number;
  activeTab: Name;
};

export const DesktopContent = ({ activeSection, activeTab }: Props) => {
  const job = useMemo(
    () => (typeof activeSection !== 'undefined' ? JOBS[activeTab][activeSection] : null),
    [activeSection, activeTab],
  );

  return (
    <Stack sx={{ justifyContent: 'center', width: '100%' }}>
      {job && (
        <Stack
          key={`${activeTab}-${activeSection}`}
          sx={{
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95), rgba(40,40,40,0.95))',
            borderLeft: `4px solid ${activeTab}.main`,
            p: 3,
            transition: 'border-color 0.3s ease',
          }}
        >
          <Typography
            sx={{ color: '#666', fontSize: '0.65rem', letterSpacing: 1, marginBottom: 0.5, textTransform: 'uppercase' }}
          >
            {job.sector}
          </Typography>
          <Typography
            sx={{
              color: `${activeTab}.main`,
              fontFamily: 'monospace',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: 1,
            }}
          >
            {job.project}
          </Typography>
          <Typography sx={{ color: '#ccc', fontSize: '0.85rem', marginBottom: 2 }}>{job.description}</Typography>
          {job.links && (
            <>
              <Typography sx={{ color: '#666', fontSize: '0.65rem', letterSpacing: 1, marginBottom: 1 }}>LINKS</Typography>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: `${activeTab}.main` }} />}
                sx={{ flexWrap: 'wrap', gap: 1, marginBottom: 2 }}
              >
                {job.links.map((link) => (
                  <Link
                    key={link}
                    href={link}
                    target="_blank"
                    sx={{
                      color: `${activeTab}.main`,
                      textDecorationColor: 'inherit !important',
                      '&:hover': {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: '0.7rem', letterSpacing: 0.5 }}>{link}</Typography>
                  </Link>
                ))}
              </Stack>
            </>
          )}
          <Typography sx={{ color: '#666', fontSize: '0.65rem', letterSpacing: 1, marginBottom: 1 }}>TECH STACK</Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {job.techStack.map((tech) => (
              <Typography
                key={tech}
                sx={{
                  backgroundColor: `${activeTab}.background`,
                  border: `1px solid ${activeTab}.main`,
                  color: 'white',
                  fontSize: '0.7rem',
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
      )}
    </Stack>
  );
};
