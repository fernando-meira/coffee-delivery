import * as S from './styles';

interface CoffeeCardProps {
  children?: React.ReactNode;
}

export function CoffeeCard({ children }: CoffeeCardProps) {
  return <S.Container>{children}</S.Container>;
}
