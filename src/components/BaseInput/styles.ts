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

export const Container = styled.div``;

export const BaseInput = styled.input<BaseInputProps>`
  ${({ inputSize, theme }) => css`
    border: 0;
    padding: 1.2rem;
    min-height: 4.2rem;
    border-radius: 0.4rem;
    margin-bottom: 1.6rem;
    border: 1px solid ${theme.colors.base.button};

    background-color: ${theme.colors.base.input};

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors.yellow[900]};
    }

    &::placeholder {
      color: ${theme.colors.base.label};
    }

    + input {
      margin-left: 1.6rem;
    }

    ${!!inputSize && inputModifiers[inputSize]};
  `}
`;
