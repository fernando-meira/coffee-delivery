import styled, { css } from 'styled-components';

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[18]};
    font-weight: ${theme.font.header.weight.bold};
  `}
`;
