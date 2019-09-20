import React from 'react';
import PT from 'prop-types';

import { StyledA, StyledLink } from './styled';

const Anchor = ({ external, to, children }) => (
  external ? (
    <StyledA href={to} taget="_blank" rel="noopener noreferrer">
      {children}
    </StyledA>
  ) : (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  )
);

Anchor.propTypes = {
  external: PT.bool,
  to: PT.string,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default Anchor;
