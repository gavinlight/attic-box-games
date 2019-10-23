import React from 'react';
import PT from 'prop-types';

import Container from 'common/Container';
import Anchor from 'common/Anchor';

import { GridContainer, Link, LinkLabel } from './styled';

const sort = (links) => links.sort((a, b) => {
  if (a.label < b.label) { return -1; }
  if (a.label > b.label) { return 1; }
  return 0;
});

const Links = ({ links }) => (
  <Container>
    <GridContainer>
      {sort(links).map((link, index) => (
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

Links.propTypes = {
  links: PT.arrayOf(PT.shape({
    label: PT.string,
    links: PT.arrayOf(PT.shape({
      label: PT.string,
      link: PT.string,
    })),
  })),
};

export default Links;
