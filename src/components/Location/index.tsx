import { MapPin } from 'phosphor-react';
import { useState, useEffect } from 'react';

import * as S from './styles';

export function Location() {
  const [location, setLocation] = useState<number[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      if (latitude && latitude) {
        setLocation([latitude, longitude]);
      }
    });
  }, []);

  return (
    <S.Container>
      <MapPin size={22} weight="fill" />

      <S.LocationText>Itapetininga</S.LocationText>
    </S.Container>
  );
}
