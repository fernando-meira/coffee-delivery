import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  gap: 3.2rem;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;

  div + div {
    margin-top: 1.6rem;
  }
`;

export const Aside = styled.aside``;
