import { Counter, CartButton } from '~/components';

import * as S from './styles';

export function Buy() {
  return (
    <S.BuyWrapper>
      <S.PriceWrapper>
        <S.SmallText>R$&nbsp;</S.SmallText>

        <S.Price>9.90</S.Price>
      </S.PriceWrapper>

      <S.CounterWrapper>
        <Counter />

        <CartButton colorScheme="purple" />
      </S.CounterWrapper>
    </S.BuyWrapper>
  );
}
