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
  inputSize?: 'small' | 'medium' | 'large';
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, inputSize, ...rest }, ref: RefType) => {
    return (
      <S.Container ref={ref} inputSize={inputSize}>
        <S.BaseInput {...rest} />

        {label && <S.OptionalText>{label}</S.OptionalText>}
      </S.Container>
    );
  }
);
