import styled, { css } from 'styled-components';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

const AnchorStyling = css`
  text-decoration: none;
  color: inherit;
  position: relative;
  color: ${(props) => props.theme.colors[props.color]};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors[props.color]};
    transition: 200ms width;
  }

  &:hover:after {
    width: 100%;
  }
`;

const propTypes = {
  color: PT.oneOf(['black', 'white']),
};

export const StyledA = styled.a`
  ${AnchorStyling};
`;

StyledA.propTypes = propTypes;

export const StyledLink = styled(Link)`
  ${AnchorStyling};
`;

StyledLink.propTypes = propTypes;
