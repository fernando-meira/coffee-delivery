import * as S from './styles';

interface SubtitleProps {
  children: React.ReactNode;
}

export function Subtitle({ children }: SubtitleProps) {
  return <S.Subtitle>{children}</S.Subtitle>;
}
