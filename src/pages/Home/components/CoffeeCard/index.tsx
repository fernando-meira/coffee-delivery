import { Buy, Tags } from '~/components';
import { CoffeeCardProps } from '~/interfaces/types/cart';

import * as S from './styles';

export function CoffeeCard({ coffeeData }: CoffeeCardProps) {
  const { id, image, tags, title, subtitle, price } = coffeeData;

  return (
    <S.Container>
      <S.Image src={image} />

      <S.Content>
        {tags && <Tags tags={tags} />}

        <S.Title title={title}>{title}</S.Title>

        <S.Subtitle>{subtitle}</S.Subtitle>

        <Buy coffeeData={coffeeData} />
      </S.Content>
    </S.Container>
  );
}
