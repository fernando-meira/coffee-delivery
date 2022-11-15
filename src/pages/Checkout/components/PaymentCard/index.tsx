import { useState } from 'react';

import { Bank, Money, CreditCard, CurrencyDollar } from 'phosphor-react';

import * as S from './styles';
import { defaultTheme } from '~/styles/default';
import { CardHeader, PaymentMethodCard } from '../';
import {
  PaymentMethodsEnum,
  PaymentMethodDescriptionEnum,
} from '~/interfaces/enums/enums';

export function PaymentCard() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    PaymentMethodsEnum | undefined
  >(undefined);

  const paymentMethods = [
    {
      icon: <CreditCard />,
      id: PaymentMethodsEnum.credit,
      description: PaymentMethodDescriptionEnum.creditCard,
    },
    {
      icon: <Bank />,
      id: PaymentMethodsEnum.debit,
      description: PaymentMethodDescriptionEnum.debitCard,
    },
    {
      icon: <Money />,
      id: PaymentMethodsEnum.money,
      description: PaymentMethodDescriptionEnum.money,
    },
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
            key={paymentMethod.id}
            icon={paymentMethod.icon}
            paymentMethod={paymentMethod.description}
            isSelected={selectedPaymentMethod === paymentMethod.id}
            onClick={() => setSelectedPaymentMethod(paymentMethod.id)}
          />
        ))}
      </S.PaymentMethodsWrapper>
    </S.Container>
  );
}
