import { useTheme } from 'styled-components';

function CaretLeft({ color }) {
  const theme = useTheme();
  return (
    <svg
      width={'calc(21px + 1vw)'}
      fill={color ?? theme.svg.primary}
      viewBox="0 0 21 75"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fillRule="evenodd"
        d="M18.398 72.917a1 1 0 01-1.315-.519l-15-34.5a1 1 0 010-.797l15-34.5a1 1 0 111.834.797L4.09 37.5 18.917 71.6a1 1 0 01-.519 1.316z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CaretLeft;
