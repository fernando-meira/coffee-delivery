import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
}

export function BaseInput({ ...rest }: BaseInputProps) {
  return (
    <S.Container>
      <S.BaseInput {...rest} />
    </S.Container>
  );
}
