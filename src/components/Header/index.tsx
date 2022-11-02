import * as S from './styles';

import logo from '~/assets/logo.svg';
import { Location, CartButton } from '~/components';

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />

      <S.Content>
        <Location local="Itapetininga, SP" />

        <CartButton colorScheme="yellow" />
      </S.Content>
    </S.HeaderContainer>
  );
}
