import React, { useRef } from 'react';
import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: 'small' | 'medium' | 'large';
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, inputSize, error, ...rest }, ref: RefType) => {
    return (
      <S.Container ref={ref} inputSize={inputSize} hasError={!!error}>
        <S.BaseInput {...rest} />

        {error && <S.ErrorText>{error}</S.ErrorText>}

        {label && <S.OptionalText>{label}</S.OptionalText>}
      </S.Container>
    );
  }
);
