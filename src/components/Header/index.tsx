import logo from '~/assets/logo.svg';
import { defaultTheme } from '~/styles/default';
import { Location, CartButton } from '~/components';

import * as S from './styles';
import { useCart } from '~/context/CartContext';

export function Header() {
  const { items } = useCart();

  return (
    <S.HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />

      <S.Content>
        <Location />

        <CartButton
          amountItems={items?.length}
          iconColor={defaultTheme.colors.yellow[900]}
          backgroundColor={defaultTheme.colors.yellow[100]}
        />
      </S.Content>
    </S.HeaderContainer>
  );
}
