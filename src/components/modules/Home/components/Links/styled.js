import styled from 'styled-components';
import { media } from 'styles/utils';

import { StyledA } from 'common/Anchor/styled';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 60px;

  ${media.mobile`
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  `}
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 60px;

  & ${StyledA} {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
    text-decoration: none;
    word-break: break-word;

    ${media.tablet`
      word-break: normal;
    `}

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media.mobile`
    width: calc(50% - 30px);

    &:nth-child(odd) {
      margin-right: 60px;
    }
  `}

  ${media.tablet`
    width: calc(33% - 40px);
    margin-right: 60px;

    &:nth-child(3n + 2) {
      margin-right: 0px;
    }

    &:nth-child(2) {
      width: calc(66% - 40px);
      margin-right: 0;
    }
  `}
`;

export const LinkLabel = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
`;
