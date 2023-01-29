import { IconProps } from 'phosphor-react';

import * as S from './styles';

interface ListIconProps {
  content: React.ReactNode;
  backgroundIconColor: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function ListIcon({
  content,
  icon: Icon,
  backgroundIconColor,
}: ListIconProps) {
  return (
    <S.Container>
      <S.IconWrapper backgroundIconColor={backgroundIconColor}>
        {<Icon size={16} color="#fff" weight="fill" />}
      </S.IconWrapper>

      <S.Content>{content}</S.Content>
    </S.Container>
  );
}
