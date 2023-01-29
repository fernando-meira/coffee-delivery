import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div<{ backgroundIconColor: string }>`
  ${({ backgroundIconColor }) => css`
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.4rem;
    min-width: 3.2rem;
    min-height: 3.2rem;
    margin-right: 0.8rem;
    border-radius: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${backgroundIconColor};
  `}
`;

export const Content = styled.span`
  ${({ theme }) => css`
    max-width: 40.2rem;

    p {
      font-size: ${theme.font.base.sizes[16]};
      font-weight: ${theme.font.base.weight.regular};
      line-height: ${theme.font.base.lineHeight[130]};
    }

    strong {
      font-weight: ${theme.font.base.weight.bold};
    }
  `}
`;
