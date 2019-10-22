import styled from 'styled-components';

import Container from 'common/Container';

import footerSvg from 'vectors/footer.svg?external';

export const FooterContainer = styled.div`
  padding: 80px 0;
  font-size: 30px;
  line-height: 36px;
  line-height: 46px;
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
`;
