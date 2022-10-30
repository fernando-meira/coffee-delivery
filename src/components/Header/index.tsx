import * as S from './styles';

import { Location } from '../';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />

      <div>
        <Location local="Itapetininga, SP" />
      </div>
    </S.HeaderContainer>
  );
}
