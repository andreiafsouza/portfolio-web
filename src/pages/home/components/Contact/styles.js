import styled from 'styled-components';
import { mediumLayoutBreakPoint } from '@src/utils';
import { smallLayoutBreakPoint } from 'utils/index';

export const Container = styled.section`
  max-width: 137.5rem;
  margin: 0 auto;
  position: relative;
  padding-inline: 2rem;
  padding-block: 1rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding-inline: 5rem;
  }
`;

const BaseTitleText = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

const BaseSubtitleText = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: 110%;
  color: ${(props) => props.theme.text.secondary};
`;

export const Title = styled(BaseTitleText)`
  text-align: center;
`;

export const Subtitle = styled(BaseSubtitleText)`
  text-align: center;
  font-style: italic;

  margin-bottom: 2rem;
  min-height: 3.75rem;
`;

export const ContactInfoBox = styled.div`
  padding: 1rem;
  margin: 0 auto;
  border-bottom: 1px dotted ${(props) => props.theme.text.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;

  @media (min-width: ${smallLayoutBreakPoint}) {
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    justify-content: center;
    width: fit-content;
  }
`;

export const IconLink = styled.a`
  path {
    transition: all 0.3s ease-in-out;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      path {
        transition: all 0.1s ease-in-out;
        fill: ${(props) => props.theme.text.secondary};
      }
    }
  }
`;

export const AddressTitle = styled(BaseSubtitleText)`
  text-align: center;

  margin-top: 2rem;
`;
