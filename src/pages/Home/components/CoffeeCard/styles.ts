import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    position: relative;

    padding: 1rem;
    min-width: 100%;
    min-height: 31rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border: 2px solid transparent;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    list-style: none;
    transition: all 300ms;
    background-color: ${theme.colors.base.card};

    :hover {
      border: 2px solid ${theme.colors.purple[100]};
    }
  `}
`;

export const Content = styled.div`
  margin-top: 7rem;

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

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 100%;

    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[20]};
    font-weight: ${theme.font.header.weight.bold};
    line-height: ${theme.font.header.lineHeight[130]};

    &:hover {
      overflow: visible;
    }
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    margin-top: 0.8rem;

    text-align: center;
    color: ${theme.colors.base.label};
    font-size: ${theme.font.base.sizes[12]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};
  `}
`;
