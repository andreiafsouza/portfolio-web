import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 1000;
`;

export const NavbarWrapper = styled.div`
  width: 37%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2.7rem 15% 0 15%;
  gap: 2.7rem;
`;

export const NavbarItem = styled.div`
  color: ${(props) => props.theme.textColor.main[100]};
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 103.7%;
`;
