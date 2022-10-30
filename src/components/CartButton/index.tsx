import { ShoppingCart } from 'phosphor-react';

import * as S from './styles';

export interface CartButtonProps {
  colorScheme: 'yellow' | 'purple';
}

export function CartButton({ colorScheme }: CartButtonProps) {
  return (
    <S.Container colorScheme={colorScheme}>
      <ShoppingCart size={22} weight="fill" />
    </S.Container>
  );
}
