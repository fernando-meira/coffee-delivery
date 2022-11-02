import { CoffeeCard } from '../CoffeeCard';
import { coffeesData } from '../../mock/coffeesMock';

import * as S from './styles';

export function CoffeeList() {
  return (
    <S.Container>
      <S.Title>Nossos Cafés</S.Title>

      <S.List>
        {coffeesData.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            tags={coffee.tags}
            image={coffee.image}
            title={coffee.title}
            subtitle={coffee.subtitle}
          />
        ))}
      </S.List>
    </S.Container>
  );
}
