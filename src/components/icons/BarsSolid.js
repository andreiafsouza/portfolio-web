import { useTheme } from 'styled-components';

//Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc

function BarsSolid({ size, color }) {
  const theme = useTheme();
  return (
    <svg height={size ?? '24'} width={size ?? '24'} viewBox="0 0 448 512">
      <path
        fill={color ?? theme.svg.primary}
        d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
      ></path>
    </svg>
  );
}

export default BarsSolid;
