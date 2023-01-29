import { Coffee, Timer, Package, ShoppingCart } from 'phosphor-react';

import { ListIcon } from '~/components';
import { defaultTheme } from '~/styles/default';
import mockup from '~/assets/coffee-delivery.svg';

import * as S from './styles';

export function Intro() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: <p>Compra simples e segura</p>,
      backgroundColor: defaultTheme.colors.yellow[900],
    },
    {
      icon: Package,
      title: <p>Embalagem mantém o café intacto</p>,
      backgroundColor: defaultTheme.colors.base.text,
    },
    {
      icon: Timer,
      title: <p>Entrega rápida e rastreada</p>,
      backgroundColor: defaultTheme.colors.yellow[500],
    },
    {
      icon: Coffee,
      title: <p>O café chega fresquinho até você</p>,
      backgroundColor: defaultTheme.colors.purple[500],
    },
  ];

  return (
    <S.Container>
      <S.Content>
        <S.TextWrapper>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>

          <S.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Subtitle>
        </S.TextWrapper>

        <S.BenefitsWrapper>
          {benefits.map((benefit) => (
            <ListIcon
              key={Math.random()}
              icon={benefit.icon}
              content={benefit.title}
              backgroundIconColor={benefit.backgroundColor}
            />
          ))}
        </S.BenefitsWrapper>
      </S.Content>

      <img src={mockup} />
    </S.Container>
  );
}
