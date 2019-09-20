import React from 'react';

import Container from 'common/Container';
import Anchor from 'common/Anchor';

import { FooterContainer } from './styled';

const Footer = () => (
  <FooterContainer>
    <Container>
      Questions about our team, Seek or anything else? Contact us via <Anchor to="qwerwer">mail</Anchor> or <Anchor to="erewr">Facebook</Anchor>
    </Container>
  </FooterContainer>
);

export default Footer;
