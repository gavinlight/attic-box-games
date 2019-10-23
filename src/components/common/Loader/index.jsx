import React from 'react';
import PT from 'prop-types';
import P5Wrapper from 'react-p5-wrapper';

import { LoaderContainer } from './styled';
import sketch from './sketch';

const Loader = ({ path = '/', children }) => {
  const [active, setActive] = React.useState(true);
  React.useEffect(() => {
    setActive(true);
    setTimeout(() => setActive(false), 750);
  }, [path]);

  return (
    <>
      <LoaderContainer active={active}>
        <P5Wrapper sketch={sketch} />
      </LoaderContainer>
      {!active && children}
    </>
  );
};

Loader.propTypes = {
  path: PT.string,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default Loader;
