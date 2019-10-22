import styled from 'styled-components';
import { media } from 'styles/utils';

import { StyledA } from 'common/Anchor/styled';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 60px;

  ${media.tablet`
    flex-wrap: wrap;
    flex-direction: row;
  `}
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  margin-bottom: 60px;

  & ${StyledA} {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media.tablet`
    padding-right: 60px;
    width: 33%;
  `}
`;

export const LinkLabel = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Break = styled.div`
  width: 33%;
`;
