import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  gap: 3.2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  width: 100%;

  > div + div {
    margin-top: 1.6rem;
  }
`;

export const Aside = styled.aside`
  @media (max-width: 720px) {
    margin-bottom: 1.6rem;
  }
`;
