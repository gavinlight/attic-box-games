import styled from 'styled-components';

import { StyledA } from 'common/Anchor/styled';

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0 80px;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33%;
  padding-right: 60px;
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
