import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin: 9.4rem 0;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.yellow[900]};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[32]};
    line-height: ${theme.font.header.lineHeight[130]};
    font-weight: ${theme.font.header.weight.extraBold};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-size: ${theme.font.base.sizes[20]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};
  `}
`;

export const Content = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderSummaryWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    border-radius: 6px 36px;
    border: double 1px transparent;
    background-image: ${`linear-gradient(white, white),
      radial-gradient(circle at top left, ${theme.colors.yellow[500]}, ${theme.colors.purple[500]})`};

    background-origin: border-box;
    background-clip: content-box, border-box;
  `}
`;

export const OrderSummary = styled.div`
  gap: 3.2rem;
  display: flex;
  flex-direction: column;

  padding: 4rem;
`;
