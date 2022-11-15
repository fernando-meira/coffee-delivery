import { ShoppingCart } from 'phosphor-react';

import * as S from './styles';
export interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconColor: string;
  amountItems?: number;
  backgroundColor: string;
  hasHoverTransition?: boolean;
}

export function CartButton({
  iconColor,
  amountItems,
  backgroundColor,
  hasHoverTransition,
  ...rest
}: CartButtonProps) {
  return (
    <S.Container
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      hasHoverTransition={hasHoverTransition}
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
