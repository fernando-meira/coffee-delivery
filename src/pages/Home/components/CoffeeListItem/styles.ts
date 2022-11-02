import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 31rem;
    width: 25.6rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    background-color: ${theme.colors.base.card};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  margin-top: -6rem;
`;

export const Image = styled.img``;

export const TagWrapper = styled.div`
  margin: 1.2rem 0 1.6rem;
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    border-radius: 16px;
    padding: 0.4rem 0.8rem;

    color: ${theme.colors.yellow[500]};
    background: ${theme.colors.yellow[100]};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[20]};
    font-weight: ${theme.font.header.weight.bold};
    line-height: ${theme.font.header.lineHeight[130]};
  `}
`;
