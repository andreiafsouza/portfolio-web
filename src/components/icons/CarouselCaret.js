import { useTheme } from 'styled-components';

function CarouselCaret({ color, rotate }) {
  const theme = useTheme();
  return (
    <svg
      width="21"
      height="75"
      fill={color ?? theme.svg.primary}
      transform={rotate ? `rotate(${rotate})` : 'rotate(0)'}
      viewBox="0 0 21 75"
    >
      <path
        fillRule="evenodd"
        d="M2.602 2.083a1 1 0 011.315.519l15 34.5a1 1 0 010 .797l-15 34.5a1 1 0 11-1.834-.797L16.91 37.5 2.083 3.4a1 1 0 01.519-1.316z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CarouselCaret;
