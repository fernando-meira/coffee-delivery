import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    position: relative;

    height: 31rem;
    min-width: 100%;
    padding: 2rem 2.4rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    list-style: none;
    background-color: ${theme.colors.base.card};
  `}
`;

export const Content = styled.div`
  margin-top: 9rem;

  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  left: 50%;
  top: -20px;
  position: absolute;

  transform: translateX(-50%);
`;

export const TagWrapper = styled.div`
  margin: 1.2rem 0 1.6rem;
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    border-radius: 16px;
    padding: 0.4rem 0.8rem;

    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.yellow[900]};
    font-size: ${theme.font.base.sizes[10]};
    background: ${theme.colors.yellow[100]};
    font-weight: ${theme.font.base.weight.bold};
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

export const Subtitle = styled.p`
  ${({ theme }) => css`
    margin-top: 0.8rem;

    text-align: center;
    color: ${theme.colors.base.label};
    font-size: ${theme.font.base.sizes[14]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};
  `}
`;
