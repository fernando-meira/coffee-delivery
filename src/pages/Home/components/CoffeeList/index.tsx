import { CoffeeListItem } from '../CoffeeListItem';
import * as S from './styles';

export function CoffeeList() {
  return (
    <S.Container>
      <S.Title>Nossos Cafés</S.Title>

      <S.List>
        {Array.from({ length: 8 }).map((item, index) => (
          <CoffeeListItem key={index} />
        ))}
      </S.List>
    </S.Container>
  );
}
