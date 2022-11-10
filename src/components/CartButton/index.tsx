import { ShoppingCart } from 'phosphor-react';

import * as S from './styles';
export interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconColor: string;
  amountItems?: number;
  backgroundColor: string;
}

export function CartButton({
  iconColor,
  amountItems,
  backgroundColor,
  ...rest
}: CartButtonProps) {
  return (
    <S.Container
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {!!amountItems && (
        <S.ItemCounter>
          <p>{amountItems}</p>
        </S.ItemCounter>
      )}

      <ShoppingCart size={22} weight="fill" />
    </S.Container>
  );
}
