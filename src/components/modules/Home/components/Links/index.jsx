import React from 'react';

import Container from 'common/Container';
import Anchor from 'common/Anchor';

import { GridContainer, Link, LinkLabel } from './styled';
import data from './data';

const Links = () => (
  <Container>
    <GridContainer>
      {data.map((link, index) => (
        <Link key={link.label}>
          <LinkLabel>{link.label}</LinkLabel>
          {link.links.map((url) => (
            <Anchor key={url.link} to={url.link} external>
              {url.label}
            </Anchor>
          ))}
        </Link>
      ))}
    </GridContainer>
  </Container>
);

export default Links;
