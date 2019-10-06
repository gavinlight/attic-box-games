import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import { LoaderContainer } from './styled';
import sketch from './sketch';

const Loader = ({ path = '/' }) => {
  const [active, setActive] = React.useState(true);
  React.useEffect(() => {
    setActive(true);
    setTimeout(() => setActive(false), 1000);
  }, [path]);

  return (
    <LoaderContainer active={active}>
      <P5Wrapper sketch={sketch} />
    </LoaderContainer>
  );
};

export default Loader;
