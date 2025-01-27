import { useTheme } from 'styled-components';

function AngleUpSolid({ size, color, rotate }) {
  const theme = useTheme();
  return (
    <svg
      height={size ?? '24'}
      width={size ?? '24'}
      transform={rotate ? `rotate(${rotate})` : 'rotate(0)'}
      viewBox="0 0 448 512"
    >
      <path
        fill={color ?? theme.svg.primary}
        d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
      ></path>
    </svg>
  );
}

export default AngleUpSolid;
