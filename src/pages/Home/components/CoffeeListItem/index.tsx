import * as S from './styles';
import Coffee from '../../../../assets/coffees/Type=Expresso.svg';

export function CoffeeListItem() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Image src={Coffee} />
      </S.ImageWrapper>

      <S.Content>
        <S.TagWrapper>
          <S.Tag>Tradicional</S.Tag>
        </S.TagWrapper>

        <S.Title>Expresso Tradicional</S.Title>
      </S.Content>
    </S.Container>
  );
}
