import { useTheme } from 'styled-components';

function AngleLeftSolid({ size, color }) {
  const theme = useTheme();
  return (
    <svg height={size ?? '24'} width={size ?? '24'} viewBox="0 0 448 512">
      <path
        fill={color ?? theme.svg.primary}
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      ></path>
    </svg>
  );
}

export default AngleLeftSolid;
