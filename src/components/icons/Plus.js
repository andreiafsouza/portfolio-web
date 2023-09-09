import { useTheme } from 'styled-components';

export const Plus = ({ size, color, opacity }) => {
  const theme = useTheme();
  return (
    <svg
      width={size ?? 128}
      viewBox="0 0 448 448"
      fill={color ?? theme.svg.primary}
      opacity={opacity ?? '1'}
    >
      <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path>
    </svg>
  );
};
