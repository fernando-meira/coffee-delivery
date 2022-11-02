import { Buy, Tags } from '~/components';

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
        {tags && <Tags tags={tags} />}

        <S.Title title={title}>{title}</S.Title>

        <S.Subtitle>{subtitle}</S.Subtitle>

        <Buy />
      </S.Content>
    </S.Container>
  );
}
