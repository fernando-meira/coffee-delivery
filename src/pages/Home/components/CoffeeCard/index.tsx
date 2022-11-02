import * as S from './styles';

interface CoffeeCardProps {
  image: string;
  title: string;
  tags?: string[];
  subtitle: string;
}

export function CoffeeCard({ image, title, tags, subtitle }: CoffeeCardProps) {
  return (
    <S.Container>
      <S.Image src={image} />

      <S.Content>
        {tags?.length &&
          tags.map((tag) => (
            <S.TagWrapper key={tag}>
              <S.Tag>{tag}</S.Tag>
            </S.TagWrapper>
          ))}

        <S.Title>{title}</S.Title>

        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </S.Container>
  );
}
