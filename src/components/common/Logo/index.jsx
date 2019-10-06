import React from 'react';
import PT from 'prop-types';

import LogoImage from 'images/logo.jpg';

const Logo = ({ size }) => (
  <img
    src={LogoImage}
    width={size}
    height={size}
    alt="Attic Box Games Logo"
  />
);

Logo.propTypes = {
  size: PT.string,
};

Logo.defaultProps = {
  size: '40px',
};

export default Logo;
