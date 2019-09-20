import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 46px 32px;
  color: ${(props) => props.theme.colors.white};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 20px;
  }
`;
