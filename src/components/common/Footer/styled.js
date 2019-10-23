import styled from 'styled-components';
import { media } from 'styles/utils';

import footerSvg from 'vectors/footer.svg?external';
import Container from 'common/Container';

export const FooterContainer = styled.div`
  padding: 40px 0;
  font-size: 24px;
  line-height: 36px;
  background-color: ${(props) => props.theme.colors.grey};
  background-image: url(${footerSvg});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;

  & > ${Container} {
    padding: 0 40px;
  }

  & img {
    display: block;
    margin-left: auto;
    margin-top: 20px;
  }

  ${media.tablet`
    font-size: 30px;
    line-height: 46px;
    padding: 80px 0;

    & img {
      width: 60px;
      height: 60px;
    }
  `}
`;
