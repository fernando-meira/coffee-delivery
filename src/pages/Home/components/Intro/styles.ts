import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 9.4rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.base.title};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[48]};
    line-height: ${theme.font.header.lineHeight[130]};
    font-weight: ${theme.font.header.weight.extraBold};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.base.family};
    font-size: ${theme.font.base.sizes[20]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};
  `}
`;
