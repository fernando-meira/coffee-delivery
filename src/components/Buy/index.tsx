import { NavLink } from 'react-router-dom';

import { defaultTheme } from '~/styles/default';

import { Counter, CartButton } from '~/components';

import { formatPrice } from '~/functions';
import { useCart } from '~/context/CartContext';
import { CoffeeCardProps } from '~/interfaces/types/cart';

import * as S from './styles';

export function Buy({ coffeeData }: CoffeeCardProps) {
  const { items } = useCart();

  const currentItem = items?.find((item) => item.id === coffeeData.id);

  function formattedPrice() {
    if (currentItem !== undefined) {
      return formatPrice(coffeeData.price * currentItem?.amount);
    }

    return formatPrice(coffeeData.price);
  }

  return (
    <S.BuyWrapper>
      <S.PriceWrapper>
        <S.SmallText>R$&nbsp;</S.SmallText>

        <S.Price>{formattedPrice()}</S.Price>
      </S.PriceWrapper>

      <S.CounterWrapper>
        <Counter
          coffeeData={coffeeData}
          amount={!!currentItem ? currentItem.amount : 0}
        />

        <NavLink to="/checkout" title="Checkout">
          <CartButton
            iconColor={defaultTheme.colors.base.white}
            backgroundColor={defaultTheme.colors.purple[900]}
          />
        </NavLink>
      </S.CounterWrapper>
    </S.BuyWrapper>
  );
}
