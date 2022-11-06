import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0.8rem;
    min-height: 3.8rem;
    border-radius: 0.8rem;

    color: ${theme.colors.purple[500]};
    background-color: ${theme.colors.purple[100]};
  `}
`;

export const LocationWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 0.4rem;
  }
`;

export const LocationText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple[900]};
    font-size: ${theme.font.base.sizes[14]};
    font-weight: ${theme.font.base.weight.regular};
    line-height: ${theme.font.base.lineHeight[130]};
  `}
`;
