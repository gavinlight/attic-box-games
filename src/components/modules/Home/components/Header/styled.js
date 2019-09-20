import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 130px 0 40px;
`;

export const Quote = styled.h1`
  margin: 0 0 50px;
  font-weight: 400;
`;

export const Name = styled.h2`
  margin: 0 0 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey.dark};
`;

export const Image = styled.div`
  position: absolute;
  right: 0;
  bottom: -80px;
  width: 190px;
  height: 190px;
  background-color: ${(props) => props.theme.colors.grey.dark};
`;
