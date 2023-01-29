import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin: 9.4rem 0;

  @media (max-width: 720px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.yellow[900]};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[32]};
    line-height: ${theme.font.header.lineHeight[130]};
    font-weight: ${theme.font.header.weight.extraBold};

    @media (max-width: 720px) {
      font-size: ${theme.font.header.sizes[20]};
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-size: ${theme.font.base.sizes[20]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};

    @media (max-width: 720px) {
      font-size: ${theme.font.base.sizes[14]};
    }
  `}
`;

export const Content = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    margin-top: 3.2rem;

    img {
      display: none;
    }
  }
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
  padding: 4rem;

  gap: 3.2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    padding: 1.6rem;

    gap: 1.6rem;
  }
`;
