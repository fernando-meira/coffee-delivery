import styled, { css } from 'styled-components';

interface BaseInputProps {
  inputSize?: 'small' | 'medium' | 'large';
}

const inputModifiers = {
  small: () => css`
    width: 6rem;
  `,
  medium: () => css`
    width: 20rem;
  `,
  large: () => css`
    width: 100%;
  `,
};

export const Container = styled.div<BaseInputProps>`
  ${({ theme, inputSize }) => css`
    position: relative;

    min-height: 4.2rem;
    border-radius: 0.4rem;
    margin-bottom: 1.6rem;
    border: 1px solid ${theme.colors.base.button};

    background-color: ${theme.colors.base.input};

    ${!!inputSize && inputModifiers[inputSize]};
  `}
`;

export const BaseInput = styled.input<BaseInputProps>`
  ${({ theme }) => css`
    border: 0;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
    border-radius: 0.4rem;

    background-color: inherit;

    &::placeholder {
      color: ${theme.colors.base.label};
    }

    + input {
      margin-left: 1.6rem;
    }
  `}
`;

export const OptionalText = styled.label`
  ${({ theme }) => css`
    top: 50%;
    right: 0;
    z-index: 1;
    position: absolute;

    font-style: italic;
    transform: translate(-50%, -50%);
    color: ${theme.colors.base.label};
    font-size: ${theme.font.base.sizes[12]};
    font-weight: ${theme.font.base.weight.regular};
  `}
`;
