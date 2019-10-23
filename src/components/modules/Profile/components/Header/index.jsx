import React from 'react';
import PT from 'prop-types';

import Container from 'common/Container';

import { HeaderContainer, Quote, Name, Title, Image } from './styled';

const Header = ({ name, title, quote, image }) => (
  <HeaderContainer>
    <Container>
      <Quote>{quote}</Quote>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Image image={image} />
    </Container>
  </HeaderContainer>
);

Header.propTypes = {
  name: PT.string,
  title: PT.string,
  quote: PT.string,
  image: PT.string,
};

export default Header;
