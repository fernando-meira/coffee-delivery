import React from 'react';
import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasError?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, inputSize, hasError, ...rest }, ref: RefType) => {
    return (
      <S.Container ref={ref} inputSize={inputSize} hasError={hasError}>
        <S.BaseInput {...rest} />

        {label && <S.OptionalText>{label}</S.OptionalText>}
      </S.Container>
    );
  }
);
