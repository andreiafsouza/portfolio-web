import { useTheme } from 'styled-components';

export const DividerLines = ({ color }) => {
  const theme = useTheme();
  return (
    <svg fill="none" viewBox="0 0 700 28">
      <path
        fill={color ?? theme.svg.accent}
        d="M649.6 8.7v-.6H329.7v.6h10.8v9.4H49.6v.6h309.8v-.6H351V8.7h298.6zm-299.1 0v9.4h-9.4V8.7h9.4z"
      ></path>
    </svg>
  );
};
