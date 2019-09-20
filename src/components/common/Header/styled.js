import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

export const HeaderLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
`;
