import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem;
    border-radius: 6px;

    background-color: ${theme.colors.base.card};

    @media (max-width: 720px) {
      padding: 1.6rem;
      margin-bottom: 1.6rem;
    }
  `}
`;

export const PaymentMethodsWrapper = styled.div`
  gap: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    gap: 0.8rem;
    flex-direction: column;
  }
`;
