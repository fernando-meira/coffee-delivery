import { Subtitle } from '~/components';
import { useCart } from '~/context/CartContext';
import { Form, CoffeeCard, PaymentCard } from './components';

import * as S from './styles';

export function Checkout() {
  const { items } = useCart();

  return (
    <S.Container>
      <S.Section>
        <Subtitle>Complete seu pedido</Subtitle>

        <Form />

        <PaymentCard />
      </S.Section>

      {!!items && items?.length > 0 && (
        <S.Aside>
          <Subtitle>Cafés selecionados</Subtitle>

          <CoffeeCard />
        </S.Aside>
      )}
    </S.Container>
  );
}
