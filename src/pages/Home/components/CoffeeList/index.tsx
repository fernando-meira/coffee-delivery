import { CoffeeListItem } from '../CoffeeListItem';
import * as S from './styles';

export function CoffeeList() {
  return (
    <S.Container>
      <S.Title>Nossos Cafés</S.Title>

      <CoffeeListItem />
    </S.Container>
  );
}
