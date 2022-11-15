import styled, { css } from 'styled-components';

const containerModifiers = {
  small: () => css`
    min-height: 3.2rem;
    padding: 0.5rem 0.8rem;
  `,
};

export const Container = styled.span<{ size?: 'small' }>`
  ${({ size, theme }) => css`
    padding: 0.8rem;
    border-radius: 6px;
    min-height: 3.8rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${theme.colors.base.button};

    ${!!size && containerModifiers[size]()}
  `}
`;

export const CounterButton = styled.button`
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const TotalItem = styled.p`
  ${({ theme }) => css`
    margin: 0 4px;

    color: ${theme.colors.base.title};
    font-size: ${theme.font.base.sizes[16]};
  `}
`;
