import * as S from './styles';

interface PaymentMethodCardProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  icon: React.ReactNode;
  paymentMethod: string;
}

export function PaymentMethodCard({
  icon,
  isSelected,
  paymentMethod,
  ...rest
}: PaymentMethodCardProps) {
  return (
    <S.Container isSelected={isSelected} {...rest}>
      {icon}

      {paymentMethod}
    </S.Container>
  );
}
