import { CoffeeCard } from '../CoffeeCard';
import { coffeesData } from '~/pages/Home/mock/coffeesMock';

import * as S from './styles';

export function CoffeeList() {
  return (
    <S.Container>
      <S.Title>Nossos Cafés</S.Title>

      <S.List>
        {coffeesData.map((coffee) => (
          <CoffeeCard key={coffee.id} coffeeData={coffee} />
        ))}
      </S.List>
    </S.Container>
  );
}
