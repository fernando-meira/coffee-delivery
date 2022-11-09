import { NavLink } from 'react-router-dom';

import { defaultTheme } from '~/styles/default';

import { Counter, CartButton } from '~/components';

import * as S from './styles';
import { formatPrice } from '~/functions';
import { CoffeeCardProps } from '~/interfaces/types/cart';

export function Buy({ coffeeData }: CoffeeCardProps) {
  return (
    <S.BuyWrapper>
      <S.PriceWrapper>
        <S.SmallText>R$&nbsp;</S.SmallText>

        <S.Price>{formatPrice(coffeeData.price)}</S.Price>
      </S.PriceWrapper>

      <S.CounterWrapper>
        <Counter coffeeData={coffeeData} />

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
