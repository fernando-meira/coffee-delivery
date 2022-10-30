import mockup from '../../../../assets/coffee-delivery.svg';

import * as S from './styles';

export function Intro() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>

        <S.Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </S.Subtitle>
      </S.Content>

      <img src={mockup} />
    </S.Container>
  );
}
