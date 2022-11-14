import styled, { css } from 'styled-components';

export const Container = styled.div<{ iconColor?: string }>`
  ${({ theme, iconColor }) => css`
    display: flex;

    svg {
      margin-right: 1.2rem;

      color: ${iconColor ? iconColor : theme.colors.yellow[900]};
    }
  `}
`;

export const TitleWrapper = styled.div`
  margin-bottom: 3.2rem;
`;

export const HeaderTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-size: ${theme.font.base.sizes[16]};
    font-weight: ${theme.font.base.weight.regular};
  `}
`;

export const HeaderSubtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.font.base.sizes[14]};
    font-weight: ${theme.font.base.weight.regular};
  `}
`;
