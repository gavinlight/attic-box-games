import styled, { css } from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transition: 300ms opacity;
  opacity: 0;
  pointer-events: none;

  ${(props) => props.active && css`
    opacity: 1;
  `}
`;
