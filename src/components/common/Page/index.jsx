import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Header from 'common/Header';
import Container from 'common/Container';
import Footer from 'common/Footer';

const StyledPage = styled.div`
  font-family: ${(props) => props.theme.fonts.raleway};
`;

const Page = ({ children }) => (
  <StyledPage>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </StyledPage>
);

Page.propTypes = {
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default Page;
