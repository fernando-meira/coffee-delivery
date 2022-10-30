import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    padding: 0.8rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.colors.purple[100]};

    svg {
      margin-right: 0.4rem;

      color: ${theme.colors.purple[500]};
    }
  `}
`;

export const LocationText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple[900]};
    font-size: ${theme.font.base.sizes[14]};
    font-weight: ${theme.font.base.regular};
    line-height: ${theme.font.base.lineHeight[130]};
  `}
`;
