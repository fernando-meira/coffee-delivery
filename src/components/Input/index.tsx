import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSize?: 'small' | 'medium' | 'large';
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.BaseInput {...rest} />

      {label && <S.OptionalText>{label}</S.OptionalText>}
    </S.Container>
  );
}
