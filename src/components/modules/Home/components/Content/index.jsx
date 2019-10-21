import React, { Fragment } from 'react';

import Container from 'common/Container';
import Anchor from 'common/Anchor';

import { GridContainer, Link, LinkLabel, Break } from './styled';
import data from './data';

const Content = () => (
  <Container>
    <GridContainer>
      {data.map((link, index) => (
        <Fragment key={link.label}>
          {index === 2 && <Break />}
          <Link>
            <LinkLabel>{link.label}</LinkLabel>
            {link.links.map((url) => (
              <Anchor key={url.link} to={url.link} external>
                {url.label}
              </Anchor>
            ))}
          </Link>
        </Fragment>
      ))}
    </GridContainer>
  </Container>
);

export default Content;
