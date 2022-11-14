import * as S from './styles';

interface CardHeaderProps {
  iconColor?: string;
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function CardHeader({
  icon,
  title,
  subtitle,
  iconColor,
}: CardHeaderProps) {
  return (
    <S.Container iconColor={iconColor}>
      {icon && icon}

      <S.TitleWrapper>
        <S.HeaderTitle>{title}</S.HeaderTitle>

        {subtitle && <S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle>}
      </S.TitleWrapper>
    </S.Container>
  );
}
