import { useTheme } from 'styled-components';

function Terminal({ size, color, rotate }) {
  const theme = useTheme();
  return (
    <svg width={size ?? '32'} fill="none" viewBox="0 0 77 50">
      <path
        fill={color ?? theme.svg.primary}
        d="M27.825 27.825a4.006 4.006 0 000-5.662l-20-20a4.006 4.006 0 00-5.663 0 4.006 4.006 0 000 5.662L19.337 25 2.175 42.175a4.006 4.006 0 000 5.663 4.006 4.006 0 005.662 0l20-20-.012-.013zM29 45c0-2.21 1.592-4 3.556-4h40.888C75.408 41 77 42.79 77 45s-1.592 4-3.556 4H32.555C30.593 49 29 47.21 29 45z"
      ></path>
    </svg>
  );
}

export default Terminal;
