import { Subtitle } from '~/components';
import { Form, CoffeeCard, PaymentCard } from './components';

import * as S from './styles';

export function Checkout() {
  return (
    <S.Container>
      <S.Section>
        <Subtitle>Complete seu pedido</Subtitle>

        <Form />

        <PaymentCard />
      </S.Section>

      <S.Aside>
        <Subtitle>Cafés selecionados</Subtitle>

        <CoffeeCard />
      </S.Aside>
    </S.Container>
  );
}
