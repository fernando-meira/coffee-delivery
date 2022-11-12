import { Subtitle } from '~/components';

import * as S from './styles';

export function Checkout() {
  return (
    <S.Container>
      <S.Section>
        <Subtitle>Complete seu pedido</Subtitle>

        <S.FormWrapper></S.FormWrapper>
      </S.Section>

      <S.CoffeeCard>
        <Subtitle>Cafés selecionados</Subtitle>
      </S.CoffeeCard>
    </S.Container>
  );
}
