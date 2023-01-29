import { MapPin, CurrencyDollar, Timer } from 'phosphor-react';

import biker from '~/assets/biker.svg';
import { ListIcon } from '~/components';
import { defaultTheme } from '~/styles/default';

import * as S from './styles';

export function Success() {
  return (
    <S.Container>
      <S.Title>Uhu! Pedido confirmado</S.Title>

      <S.Subtitle>
        Agora é só aguardar que logo o café chegará até você
      </S.Subtitle>

      <S.Content>
        <S.OrderSummaryWrapper>
          <S.OrderSummary>
            <ListIcon
              icon={MapPin}
              backgroundIconColor={defaultTheme.colors.purple[500]}
              content={
                <p>
                  Entrega em <strong>Humberto Pelegrini, 26</strong>,
                  Itapetininga - São Paulo, Brasil
                </p>
              }
            />

            <ListIcon
              icon={Timer}
              backgroundIconColor={defaultTheme.colors.yellow[500]}
              content={
                <p>
                  Previsão de entrega <br />
                  <strong>20 min - 50 min</strong>
                </p>
              }
            />

            <ListIcon
              icon={CurrencyDollar}
              backgroundIconColor={defaultTheme.colors.yellow[900]}
              content={
                <p>
                  Pagamento na entrega <br />
                  <strong>Cartão de Crédito</strong>
                </p>
              }
            />
          </S.OrderSummary>
        </S.OrderSummaryWrapper>

        <img src={biker} />
      </S.Content>
    </S.Container>
  );
}
