import * as S from './styles';

import { Location, CartButton } from '../';
import logo from '../../assets/logo.svg';

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
