import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const AnchorStyling = css`
  text-decoration: none;
  color: inherit;
`;

export const StyledA = styled.a`
  ${AnchorStyling};
`;

export const StyledLink = styled(Link)`
  ${AnchorStyling};
`;
