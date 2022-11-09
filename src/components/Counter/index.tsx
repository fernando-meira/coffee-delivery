import { useState } from 'react';

import { Plus, Minus } from 'phosphor-react';

import * as S from './styles';
import { useCart } from '~/context/CartContext';
import { defaultTheme } from '~/styles/default';
import { CounterEnum } from '~/interfaces/enums/enums';
import { CoffeeCardProps } from '~/interfaces/types/cart';

export function Counter({ coffeeData }: CoffeeCardProps) {
  const { items, handleAddNewItem } = useCart();

  const [amount, setAmount] = useState(0);

  const handleCounter = (action: CounterEnum) => {
    if (action === CounterEnum.increment) {
      return setAmount((state) => state + 1);
    }

    if (amount > 0 && action === CounterEnum.decrement) {
      return setAmount((state) => state - 1);
    }
  };

  return (
    <S.Container>
      <S.CounterButton onClick={() => handleCounter(CounterEnum.decrement)}>
        <Minus
          size={14}
          weight="bold"
          color={defaultTheme.colors.purple[500]}
        />
      </S.CounterButton>

      <S.TotalItem>{amount}</S.TotalItem>

      <S.CounterButton onClick={() => handleAddNewItem({ coffeeData })}>
        <Plus size={14} weight="bold" color={defaultTheme.colors.purple[500]} />
      </S.CounterButton>
    </S.Container>
  );
}
