import { useTheme } from 'styled-components';

export function MenuBars({ size, color }) {
  const theme = useTheme();

  return (
    <svg
      stroke={theme.svg.primary}
      width={60}
      viewBox="-15 -10 130 120"
      fill="none"
      className="hamburger"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
        d="M20 40h60a1 1 0 010 20H20a1 1 0 010-40h30v70"
        className="line"
      ></path>
    </svg>
  );
}
