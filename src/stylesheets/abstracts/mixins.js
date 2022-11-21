import { css } from 'styled-components';

export const mainBoxShadow = css`
  box-shadow: 4px 4px 4px ${(props) => props.theme.boxShadows.main};
`;
