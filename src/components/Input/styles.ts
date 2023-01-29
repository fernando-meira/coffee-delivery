import styled, { css, DefaultTheme } from 'styled-components';

interface BaseInputProps {
  hasError?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
}

const inputModifiers = {
  small: () => css`
    width: 6rem;
  `,
  medium: () => css`
    width: 20rem;
    min-width: 20rem;

    @media (max-width: 720px) {
      width: 100%;
    }
  `,
  large: () => css`
    width: 100%;
  `,
  hasError: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.yellow[900]};
  `,
};

export const Container = styled.div<BaseInputProps>`
  ${({ theme, inputSize, hasError }) => css`
    position: relative;

    min-height: 4.2rem;
    border-radius: 0.4rem;
    margin-bottom: 1.6rem;
    border: 1px solid ${theme.colors.base.button};

    background-color: ${theme.colors.base.input};

    ${!!inputSize && inputModifiers[inputSize]};
    ${hasError && inputModifiers.hasError(theme)};
  `}
`;

export const BaseInput = styled.input<BaseInputProps>`
  ${({ theme }) => css`
    border: 0;
    width: 100%;
    height: 100%;
    min-width: 5rem;
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

export const ErrorText = styled.span`
  ${({ theme }) => css`
    right: 0;
    bottom: 0;
    position: absolute;

    color: ${theme.colors.yellow[900]};
    font-size: ${theme.font.base.sizes[10]};
  `}
`;
