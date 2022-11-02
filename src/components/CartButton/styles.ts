import styled, { css } from 'styled-components';

import { CartButtonProps } from './';

export const Container = styled.button<CartButtonProps>`
  ${({ theme, colorScheme }) => css`
    border: none;
    padding: 0.8rem;
    min-height: 3.8rem;
    margin-left: 0.8rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors[colorScheme][100]};

    svg {
      color: ${theme.colors[colorScheme][500]};
    }
  `}
`;
