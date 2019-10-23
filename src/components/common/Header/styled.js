import styled from 'styled-components';
import { media } from 'styles/utils';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 28px;
  z-index: 1;

  ${media.tablet`
    padding-left: 46px;
    padding-right: 46px;
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 20px;
  }
`;

export const LogoText = styled.span`
  display: none;

  ${media.tablet`
    display: inline;
  `}
`;

export const LogoTextMobile = styled.span`
  ${media.tablet`
    display: none;
  `}
`;
