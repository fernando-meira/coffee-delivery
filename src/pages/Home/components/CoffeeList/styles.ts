import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 3.2rem 0;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: 5.4rem;

    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[32]};
    line-height: ${theme.font.header.lineHeight[130]};
    font-weight: ${theme.font.header.weight.extraBold};
  `}
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 4rem 3.2rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
