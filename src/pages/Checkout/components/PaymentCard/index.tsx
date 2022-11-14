import { CurrencyDollar } from 'phosphor-react';
import { defaultTheme } from '~/styles/default';

import { CardHeader } from '../';

import * as S from './styles';

export function PaymentCard() {
  return (
    <S.Container>
      <CardHeader
        title="Pagamento"
        icon={<CurrencyDollar size={22} />}
        iconColor={defaultTheme.colors.purple[500]}
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
    </S.Container>
  );
}
