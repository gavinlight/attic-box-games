import React from 'react';

import GavinImage from 'images/gavin.jpg';
import Container from 'common/Container';

import { HeaderContainer, Quote, Name, Title, Image } from './styled';

const Header = () => (
  <HeaderContainer>
    <Container>
      <Quote>Working with us since 2014, Gavin helps us create online identities for our games and our studio, so we can communicate our vision with the outside world.</Quote>
      <Name>Gavin Ligthart</Name>
      <Title>Digital brand manager</Title>
      <Image image={GavinImage} />
    </Container>
  </HeaderContainer>
);

export default Header;
