import { IconProps } from 'phosphor-react';

import * as S from './styles';

interface BenefitsListItemProps {
  title: string;
  backgroundIconColor: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function BenefitsListItem({
  title,
  icon: Icon,
  backgroundIconColor,
}: BenefitsListItemProps) {
  return (
    <S.Container>
      <S.IconWrapper backgroundIconColor={backgroundIconColor}>
        {<Icon size={16} color="#fff" weight="fill" />}
      </S.IconWrapper>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
