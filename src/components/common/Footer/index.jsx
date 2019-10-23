import React from 'react';

import data from 'services/appData';

import Container from 'common/Container';
import Anchor from 'common/Anchor';
import Logo from 'common/Logo';

import { FooterContainer } from './styled';

const Footer = () => (
  <FooterContainer>
    <Container>
      Questions about our team, Seek or anything else? <br />
      Contact us via <Anchor to={data.mail} external reversed>mail</Anchor> or&nbsp;
      <Anchor to={data.facebook} external reversed>Facebook</Anchor>
      <Logo size="40" />
    </Container>
  </FooterContainer>
);

export default Footer;
