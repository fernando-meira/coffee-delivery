import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { defaultTheme } from '~/styles/default';
import { Location, CartButton } from '~/components';

import * as S from './styles';
import { useCart } from '~/context/CartContext';

export function Header() {
  const { items } = useCart();

  return (
    <S.HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Coffee Delivery logo" />
      </NavLink>

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
