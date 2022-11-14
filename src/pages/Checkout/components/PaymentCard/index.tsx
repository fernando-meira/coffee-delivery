import { Bank, Money, CreditCard, CurrencyDollar } from 'phosphor-react';

import * as S from './styles';
import { defaultTheme } from '~/styles/default';
import { CardHeader, PaymentMethodCard } from '../';

export function PaymentCard() {
  const paymentMethods = [
    { icon: <CreditCard />, method: 'Cartão de crédito' },
    { icon: <Bank />, method: 'Cartão de débito' },
    { icon: <Money />, method: 'Dinheiro' },
  ];

  return (
    <S.Container>
      <CardHeader
        title="Pagamento"
        icon={<CurrencyDollar size={22} />}
        iconColor={defaultTheme.colors.purple[500]}
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <S.PaymentMethodsWrapper>
        {paymentMethods.map((paymentMethod) => (
          <PaymentMethodCard
            key={paymentMethod.method}
            icon={paymentMethod.icon}
            paymentMethod={paymentMethod.method}
          />
        ))}
      </S.PaymentMethodsWrapper>
    </S.Container>
  );
}
