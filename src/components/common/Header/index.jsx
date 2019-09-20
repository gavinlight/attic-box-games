import React from 'react';

import data from 'services/appData';
import Anchor from 'common/Anchor';

import { HeaderContainer } from './styled';

const Header = () => (
  <HeaderContainer>
    <Anchor to="/">
      Attic Box Games
    </Anchor>
    <Anchor to={data.seek} external>
      Seek
    </Anchor>
  </HeaderContainer>
);

export default Header;
