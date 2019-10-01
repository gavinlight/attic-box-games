import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const AnchorStyling = css`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};
    transition: 200ms width;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const StyledA = styled.a`
  ${AnchorStyling};
`;

export const StyledLink = styled(Link)`
  ${AnchorStyling};
`;
