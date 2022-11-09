import { Plus, Minus } from 'phosphor-react';

import * as S from './styles';
import { useCart } from '~/context/CartContext';
import { defaultTheme } from '~/styles/default';
import { CoffeeCardProps } from '~/interfaces/types/cart';

interface CounterProps extends CoffeeCardProps {
  amount: number;
}

export function Counter({ amount, coffeeData }: CounterProps) {
  const { addItem, removeItem } = useCart();

  return (
    <S.Container>
      <S.CounterButton onClick={() => removeItem(coffeeData.id)}>
        <Minus
          size={14}
          weight="bold"
          color={defaultTheme.colors.purple[500]}
        />
      </S.CounterButton>

      <S.TotalItem>{amount}</S.TotalItem>

      <S.CounterButton onClick={() => addItem({ coffeeData })}>
        <Plus size={14} weight="bold" color={defaultTheme.colors.purple[500]} />
      </S.CounterButton>
    </S.Container>
  );
}
