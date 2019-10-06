import styled, { css } from 'styled-components';
import PT from 'prop-types';

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
  font-weight: 400;
  line-height: 1.3em;
`;

export const Name = styled.h2`
  margin: 0 0 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey.dark};
`;

export const Image = styled.div`
  position: absolute;
  right: 0;
  bottom: -140px;
  width: 190px;
  height: 190px;
  background-color: ${(props) => props.theme.colors.grey.dark};

  ${(props) => props.src && css`
    background-image: url(${props.src});
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
    border-width: 0 0 60px 60px;
    border-color: transparent transparent ${(props) => props.theme.colors.white} transparent;
  }
`;

Image.propTypes = {
  src: PT.string.isRequired,
};
