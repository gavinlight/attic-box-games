import React from 'react';
import PT from 'prop-types';

import { StyledA, StyledLink } from './styled';

const Anchor = ({
  to, external, color, reversed, children,
}) => (
  external ? (
    <StyledA
      href={to}
      color={color}
      reversed={reversed}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </StyledA>
  ) : (
    <StyledLink to={to} color={color} reversed={reversed}>
      {children}
    </StyledLink>
  )
);

Anchor.propTypes = {
  external: PT.bool,
  to: PT.string,
  color: PT.oneOf(['black', 'white']),
  reversed: PT.bool,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

Anchor.defaultProps = {
  color: 'black',
};

export default Anchor;
