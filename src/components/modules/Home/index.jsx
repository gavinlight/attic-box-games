import React from 'react';

import Page from 'common/Page';

import Header from './components/Header';
import Links from './components/Links';
import About from './components/About';

const Home = () => (
  <Page>
    <Header />
    <Links />
    <About />
  </Page>
);

export default Home;
