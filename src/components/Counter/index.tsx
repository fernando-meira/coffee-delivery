import { Plus, Minus } from 'phosphor-react';

import * as S from './styles';
import { defaultTheme } from '~/styles/default';

export function Counter() {
  return (
    <S.Container>
      <S.CounterButton>
        <Plus size={14} weight="bold" color={defaultTheme.colors.purple[100]} />
      </S.CounterButton>

      <S.TotalItem>1</S.TotalItem>

      <S.CounterButton>
        <Minus
          size={14}
          weight="bold"
          color={defaultTheme.colors.purple[100]}
        />
      </S.CounterButton>
    </S.Container>
  );
}
