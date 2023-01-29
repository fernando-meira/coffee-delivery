import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 9.4rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1366px) {
    flex-direction: column-reverse;

    img {
      max-width: 90%;
    }
  }

  @media (max-width: 720px) {
    margin: 0;
  }
`;

export const Content = styled.div``;

export const TextWrapper = styled.div`
  margin-bottom: 6.6rem;

  @media (max-width: 720px) {
    margin-bottom: 2.4rem;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.base.title};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[48]};
    line-height: ${theme.font.header.lineHeight[130]};
    font-weight: ${theme.font.header.weight.extraBold};

    @media (max-width: 720px) {
      margin: 1rem 0;

      text-align: center;
      font-size: ${theme.font.header.sizes[32]};
      font-weight: ${theme.font.header.weight.bold};
    }

    @media (max-width: 320px) {
      margin: 1rem 0;

      text-align: center;
      font-size: ${theme.font.header.sizes[20]};
      font-weight: ${theme.font.header.weight.bold};
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.base.family};
    font-size: ${theme.font.base.sizes[20]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};

    @media (max-width: 320px) {
      text-align: center;

      font-size: ${theme.font.header.sizes[18]};
    }
  `}
`;

export const BenefitsWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
