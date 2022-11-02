import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 3.2rem 0;

  img {
  }
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
