import styled, { css } from 'styled-components';
import PT from 'prop-types';
import { media } from 'styles/utils';

import headerSvg from 'vectors/header.svg?external';

export const HeaderContainer = styled.div`
  position: relative;
  padding: 150px 0 40px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  background-image: url(${headerSvg});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Quote = styled.h1`
  margin: 0 0 50px;
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1.3em;

  ${media.tablet`
    font-size: 2em;
  `}
`;

export const Name = styled.h2`
  font-size: 1.2em;
  margin: 0 0 8px;
  padding-right: 124px;

  ${media.tablet`
    font-size: 1.5em;
    padding-right: 0;
  `}
`;

export const Title = styled.h3`
  font-size: 1em;
  margin: 0;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey.dark};
  padding-right: 124px;

  ${media.tablet`
    font-size: 1.17em;
    padding-right: 0;
  `}
`;

export const Image = styled.div`
  position: absolute;
  right: 28px;
  bottom: -70px;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.grey.dark};

  ${(props) => props.image && css`
    background-image: url(${props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 30px 30px;
    border-color: transparent transparent ${(props) => props.theme.colors.white} transparent;

    ${media.tablet`
      border-width: 0 0 60px 60px;
    `}
  }

  ${media.tablet`
    right: 0;
    bottom: -140px;
    width: 190px;
    height: 190px;
  `}
`;

Image.propTypes = {
  image: PT.string.isRequired,
};
