import { MapPin } from 'phosphor-react';

import * as S from './styles';

interface LocationProps {
  local: string;
}

export function Location({ local }: LocationProps) {
  return (
    <S.Container>
      <MapPin size={22} weight="fill" />

      <S.LocationText>{local}</S.LocationText>
    </S.Container>
  );
}
