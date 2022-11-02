import * as S from './styles';

interface TagProps {
  tags: string[];
}

export function Tags({ tags }: TagProps) {
  return (
    <S.TagWrapper>
      {tags.map((tag) => (
        <S.Tag key={tag}>{tag}</S.Tag>
      ))}
    </S.TagWrapper>
  );
}
