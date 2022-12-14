import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { useCart } from '~/context/CartContext';
import { defaultTheme } from '~/styles/default';
import { Location, CartButton } from '~/components';

import * as S from './styles';

export function Header() {
  const { items } = useCart();

  return (
    <S.HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Coffee Delivery logo" />
      </NavLink>

      <S.Content>
        <Location />

        <NavLink to="/checkout" title="Checkout">
          <CartButton
            amountItems={items?.length}
            iconColor={defaultTheme.colors.yellow[900]}
            backgroundColor={defaultTheme.colors.yellow[100]}
          />
        </NavLink>
      </S.Content>
    </S.HeaderContainer>
  );
}
