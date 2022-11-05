import { defaultTheme } from '~/styles/default';
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

        <CartButton
          iconColor={defaultTheme.colors.base.white}
          backgroundColor={defaultTheme.colors.purple[900]}
        />
      </S.CounterWrapper>
    </S.BuyWrapper>
  );
}
