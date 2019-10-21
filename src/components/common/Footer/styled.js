import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.grey};
  font-size: 30px;
  line-height: 46px;

  & img {
    display: block;
    margin-left: auto;
    margin-top: 20px;
  }
`;
