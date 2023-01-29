import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem;
    border-radius: 6px;

    background-color: ${theme.colors.base.card};

    @media (max-width: 720px) {
      padding: 1.6rem;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;

  gap: 1.6rem;
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
