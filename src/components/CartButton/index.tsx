import { ShoppingCart } from 'phosphor-react';

import * as S from './styles';
export interface CartButtonProps {
  iconColor: string;
  backgroundColor: string;
}

export function CartButton({ iconColor, backgroundColor }: CartButtonProps) {
  return (
    <S.Container iconColor={iconColor} backgroundColor={backgroundColor}>
      <ShoppingCart size={22} weight="fill" />
    </S.Container>
  );
}
