import * as S from './styles';

interface PaymentMethodCardProps {
  icon: React.ReactNode;
  paymentMethod: string;
}

export function PaymentMethodCard({
  icon,
  paymentMethod,
}: PaymentMethodCardProps) {
  return (
    <S.Container>
      {icon}

      {paymentMethod}
    </S.Container>
  );
}
