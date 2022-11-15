import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { CartButtonProps } from './';

const containerModifiers = {
  hasHoverTransition: (backgroundColor: string) => css`
    :hover {
      background-color: ${lighten(0.15, backgroundColor)};
    }
  `,
};

export const Container = styled.button<CartButtonProps>`
  ${({ iconColor, backgroundColor, hasHoverTransition }) => css`
    position: relative;

    border: none;
    padding: 0.8rem;
    min-height: 3.8rem;
    margin-left: 0.8rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 300ms;
    background-color: ${backgroundColor};

    svg {
      color: ${iconColor};
    }

    ${hasHoverTransition &&
    containerModifiers.hasHoverTransition(backgroundColor)};
  `}
`;

export const ItemCounter = styled.span`
  ${({ theme }) => css`
    top: -8px;
    right: -8px;
    position: absolute;

    width: 20px;
    height: 20px;
    padding: 4px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.yellow[900]};

    p {
      text-align: center;
      color: ${theme.colors.base.white};
      font-size: ${theme.font.base.sizes[12]};
      font-weight: ${theme.font.base.weight.bold};
    }
  `}
`;
