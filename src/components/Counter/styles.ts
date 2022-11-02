import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    padding: 0.8rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${theme.colors.base.button};
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
