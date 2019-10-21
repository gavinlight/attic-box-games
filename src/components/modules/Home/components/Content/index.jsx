import React from 'react';

import Container from 'common/Container';

import { GridContainer, Link, LinkLabel, LinkUrl } from './styled';
import data from './data';

const Content = () => (
  <Container>
    <GridContainer>
      {data.map((link) => (
        <Link key={link.label}>
          <LinkLabel>{link.label}</LinkLabel>
          {link.links.map((url) => (
            <LinkUrl
              key={url.label}
              href={url.label}
              target="blank"
              rel="noopener noreferrer"
            >
              {url.link}
            </LinkUrl>
          ))}
        </Link>
      ))}
    </GridContainer>
  </Container>
);

export default Content;
