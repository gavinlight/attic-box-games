import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const Heading = styled.h3`
  display: flex;
  flex-direction: column;
  flex: 1 0 20%;
  max-width: 100px;
  text-align: right;
  margin: 6px 50px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
`;

export const Text = styled.div`
  line-height: 2.2em;

  & p {
    margin: 0 0 20px;
  }
`;
