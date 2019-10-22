import React from 'react';

import Container from 'common/Container';
import Anchor from 'common/Anchor';
import Logo from 'common/Logo';

import { FooterContainer } from './styled';

const Footer = () => (
  <FooterContainer>
    <Container>
      Questions about our team, Seek or anything else? <br />
      Contact us via <Anchor to="qwerwer" reversed>mail</Anchor> or <Anchor to="erewr" reversed>Facebook</Anchor>
      <Logo size="60" />
    </Container>
  </FooterContainer>
);

export default Footer;
