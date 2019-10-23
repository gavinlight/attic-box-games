import React from 'react';
import PT from 'prop-types';
import sanitize from 'sanitize-html';

import Container from 'common/Container';

import { AboutContainer, Heading, Text } from './styled';

const Header = ({ about }) => (
  <Container>
    <AboutContainer>
      <Heading>About</Heading>
      <Text dangerouslySetInnerHTML={{ __html: sanitize(about) }} />
    </AboutContainer>
  </Container>
);

Header.propTypes = {
  about: PT.string,
};

export default Header;
