import { useTheme } from 'styled-components';

function XMarkSolid({ size, color }) {
  const theme = useTheme();
  return (
    <svg height={size ?? '24'} width={size ?? '24'} viewBox="0 0 448 512">
      <path
        fill={color ?? theme.svg.primary}
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z"
      ></path>
    </svg>
  );
}

export default XMarkSolid;
