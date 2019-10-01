import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 46px;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 20px;
  }
`;
