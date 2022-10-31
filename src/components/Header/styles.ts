import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 420px) {
    img {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
