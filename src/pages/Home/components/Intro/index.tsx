import { Coffee, Timer, Package, ShoppingCart } from 'phosphor-react';

import { defaultTheme } from '~/styles/default';
import mockup from '~/assets/coffee-delivery.svg';

import { BenefitsListItem } from '../';

import * as S from './styles';

export function Intro() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: 'Compra simples e segura',
      backgroundColor: defaultTheme.colors.yellow[900],
    },
    {
      icon: Package,
      title: 'Embalagem mantém o café intacto',
      backgroundColor: defaultTheme.colors.base.text,
    },
    {
      icon: Timer,
      title: 'Entrega rápida e rastreada',
      backgroundColor: defaultTheme.colors.yellow[500],
    },
    {
      icon: Coffee,
      title: 'O café chega fresquinho até você',
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
            <BenefitsListItem
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              backgroundIconColor={benefit.backgroundColor}
            />
          ))}
        </S.BenefitsWrapper>
      </S.Content>

      <img src={mockup} />
    </S.Container>
  );
}
