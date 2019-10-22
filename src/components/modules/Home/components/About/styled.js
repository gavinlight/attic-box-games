import styled from 'styled-components';
import { media } from 'styles/utils';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${media.tablet`
    flex-direction: row;
    margin-bottom: 80px;
  `}
`;

export const Heading = styled.h3`
  max-width: 100px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    flex: 1 0 20%;
    margin: 6px 50px 0;
    text-align: right;
  `}
`;

export const Text = styled.div`
  line-height: 2.2em;

  & p {
    margin: 0 0 20px;
  }
`;
