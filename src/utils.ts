import { RADIAL_MENU_INNER_RADIUS, RADIAL_MENU_RADIUS } from './constants';

export const getRadialMenuSectionPath = (count: number, index: number) => {
  const angle = 360 / count;
  const start = index * angle - 90;
  const end = (index + 1) * angle - 90;

  return `M ${200 + RADIAL_MENU_INNER_RADIUS * Math.cos((start * Math.PI) / 180)} ${200 + RADIAL_MENU_INNER_RADIUS * Math.sin((start * Math.PI) / 180)}
  L ${200 + RADIAL_MENU_RADIUS * Math.cos((start * Math.PI) / 180)} ${200 + RADIAL_MENU_RADIUS * Math.sin((start * Math.PI) / 180)}
  A ${RADIAL_MENU_RADIUS} ${RADIAL_MENU_RADIUS} 0 0 1 ${200 + RADIAL_MENU_RADIUS * Math.cos((end * Math.PI) / 180)} ${200 + RADIAL_MENU_RADIUS * Math.sin((end * Math.PI) / 180)}
  L ${200 + RADIAL_MENU_INNER_RADIUS * Math.cos((end * Math.PI) / 180)} ${200 + RADIAL_MENU_INNER_RADIUS * Math.sin((end * Math.PI) / 180)}
  A ${RADIAL_MENU_INNER_RADIUS} ${RADIAL_MENU_INNER_RADIUS} 0 0 0 ${200 + RADIAL_MENU_INNER_RADIUS * Math.cos((start * Math.PI) / 180)} ${200 + RADIAL_MENU_INNER_RADIUS * Math.sin((start * Math.PI) / 180)} Z`;
};
