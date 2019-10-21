import React from 'react';

import data from 'services/appData';

import Anchor from 'common/Anchor';
import Logo from 'common/Logo';

import { HeaderContainer, LogoContainer } from './styled';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo size="33px" />
      <Anchor to="/" color="white">
        Attic Box Games
      </Anchor>
    </LogoContainer>
    <Anchor to={data.seek} external color="white">
      Seek
    </Anchor>
  </HeaderContainer>
);

export default Header;
