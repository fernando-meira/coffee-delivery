import { CoffeeCard } from '../CoffeeCard';
import * as S from './styles';

export function CoffeeList() {
  return (
    <S.Container>
      <S.Title>Nossos Cafés</S.Title>

      <S.List>
        {Array.from({ length: 8 }).map((item, index) => (
          <CoffeeCard key={index} />
        ))}
      </S.List>
    </S.Container>
  );
}
