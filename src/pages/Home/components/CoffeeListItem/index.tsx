import * as S from './styles';
import Coffee from '../../../../assets/coffees/Type=Expresso.svg';

export function CoffeeListItem() {
  return (
    <S.Container>
      <S.Image src={Coffee} />

      <S.Content>
        <S.TagWrapper>
          <S.Tag>Tradicional</S.Tag>
        </S.TagWrapper>

        <S.Title>Expresso Tradicional</S.Title>

        <S.Subtitle>
          O tradicional café feito com água quente e grãos moídos
        </S.Subtitle>
      </S.Content>
    </S.Container>
  );
}
