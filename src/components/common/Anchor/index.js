import React from 'react';
import PT from 'prop-types';

import { StyledA, StyledLink } from './styled';

const Anchor = ({ external, to, color, children }) => (
  external ? (
    <StyledA
      href={to}
      color={color}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </StyledA>
  ) : (
    <StyledLink to={to} color={color}>
      {children}
    </StyledLink>
  )
);

Anchor.propTypes = {
  external: PT.bool,
  to: PT.string,
  color: PT.oneOf(['black', 'white']),
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

Anchor.defaultProps = {
  color: 'black',
};

export default Anchor;
