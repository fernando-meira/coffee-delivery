import styled, { css } from 'styled-components';

export const TagWrapper = styled.div`
  margin: 1.2rem 0 1.6rem;

  span + span {
    margin-left: 0.4rem;
  }
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    border-radius: 16px;
    padding: 0.4rem 0.8rem;

    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.yellow[900]};
    font-size: ${theme.font.base.sizes[10]};
    background: ${theme.colors.yellow[100]};
    font-weight: ${theme.font.base.weight.bold};
  `}
`;
