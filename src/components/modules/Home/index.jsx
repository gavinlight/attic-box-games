import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './sketch';

const Home = () => (
  <P5Wrapper sketch={sketch} />
);

export default Home;
