import React from 'react';
import PT from 'prop-types';

import { StyledA, StyledLink } from './styled';

const Anchor = ({
  to, external, color, reversed, border, children,
}) => {
  const props = { color, reversed, border };

  return external ? (
    <StyledA
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </StyledA>
  ) : (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

Anchor.propTypes = {
  external: PT.bool,
  to: PT.string,
  color: PT.oneOf(['black', 'white']),
  reversed: PT.bool,
  border: PT.bool,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

Anchor.defaultProps = {
  color: 'black',
  border: true,
};

export default Anchor;
