import React, { useRef, useMemo, ReactNode, useCallback } from 'react';

import { Stack } from '@mui/material';

const SPACING = 60;
const GLOW_COLOR = '#ccc';

type Props = {
  children: ReactNode;
};

export const Background = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const svgBaseUri = useMemo(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SPACING}" height="${SPACING}" viewBox="0 0 ${SPACING} ${SPACING}"><rect x="0" y="0" width="${SPACING}" height="${SPACING}" fill="none" stroke="white" stroke-width="1"/></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  const svgGlowUri = useMemo(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SPACING}" height="${SPACING}" viewBox="0 0 ${SPACING} ${SPACING}"><rect x="0" y="0" width="${SPACING}" height="${SPACING}" fill="none" stroke="${GLOW_COLOR}" stroke-width="1"/></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    containerRef.current.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.style.setProperty('--mouse-x', '-999px');
    containerRef.current.style.setProperty('--mouse-y', '-999px');
  }, []);

  return (
    <Stack
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        '--mouse-x': '-999px',
        '--mouse-y': '-999px',
        backgroundColor: '#030303',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
    >
      <Stack
        sx={{
          backgroundImage: `url(${svgBaseUri})`,
          backgroundSize: `${SPACING}px`,
          inset: 0,
          opacity: 0.1,
          pointerEvents: 'none',
          position: 'absolute',
        }}
      />
      <Stack
        sx={{
          WebkitMaskImage: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)`,
          backgroundImage: `url(${svgGlowUri})`,
          backgroundSize: `${SPACING}px`,
          inset: 0,
          maskImage: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)`,
          pointerEvents: 'none',
          position: 'absolute',
        }}
      />
      <Stack
        sx={{ background: 'rgb(0 0 0 / 0.5)', minHeight: '100vh', pointerEvents: 'auto', position: 'relative', zIndex: 1 }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
