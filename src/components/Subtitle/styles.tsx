import styled, { css } from 'styled-components';

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    margin: 4rem 0 1.5rem;

    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[18]};
    font-weight: ${theme.font.header.weight.bold};

    @media (max-width: 720px) {
      margin: 0 0 1.6rem;
    }
  `}
`;
