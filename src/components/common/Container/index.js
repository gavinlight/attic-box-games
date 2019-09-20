import styled from 'styled-components';

import { media, sizes } from 'styles/utils';

const Container = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 28px;

  ${media.tablet`
    padding: 0;
    max-width: ${sizes.tablet}px;
  `}

  ${media.desktop`
    max-width: ${sizes.desktop - 400}px;
  `}

  ${media.large`
    max-width: ${sizes.large - 400}px;
  `}
`;

export default Container;
