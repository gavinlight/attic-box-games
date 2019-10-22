import React from 'react';

import data from 'services/appData';

import Anchor from 'common/Anchor';
import Logo from 'common/Logo';

import { HeaderContainer, LogoContainer, LogoText, LogoTextMobile } from './styled';

const Header = () => (
  <HeaderContainer>
    <Anchor to="/" color="white">
      <LogoContainer>
        <Logo size="33px" />
        <LogoText>Attic Box Games</LogoText>
        <LogoTextMobile>ABG</LogoTextMobile>
      </LogoContainer>
    </Anchor>
    <Anchor to={data.seek} external color="white">
      Seek
    </Anchor>
  </HeaderContainer>
);

export default Header;
