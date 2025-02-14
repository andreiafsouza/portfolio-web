import { useTheme } from 'styled-components';

function AngleRightSolid({ size, color }) {
  const theme = useTheme();
  return (
    <svg height={size ?? '24'} width={size ?? '24'} viewBox="0 0 448 512">
      <path
        fill={color ?? theme.svg.primary}
        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
      ></path>
    </svg>
  );
}

export default AngleRightSolid;
