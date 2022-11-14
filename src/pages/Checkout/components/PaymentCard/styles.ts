import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem;
    border-radius: 6px;

    background-color: ${theme.colors.base.card};
  `}
`;

export const PaymentMethodsWrapper = styled.div`
  gap: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
