import { Counter } from '~/components';

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
        {tags && (
          <S.TagWrapper>
            {tags.map((tag) => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </S.TagWrapper>
        )}

        <S.Title>{title}</S.Title>

        <S.Subtitle>{subtitle}</S.Subtitle>

        <Counter />
      </S.Content>
    </S.Container>
  );
}
