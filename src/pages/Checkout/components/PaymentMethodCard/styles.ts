import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.6rem;
    border-radius: 6px;

    display: flex;
    align-items: center;

    text-transform: uppercase;
    color: ${theme.colors.base.text};
    font-size: ${theme.font.base.sizes[12]};
    background-color: ${theme.colors.base.button};

    svg {
      width: 16px;
      height: 16px;
      margin-right: 1.2rem;

      color: ${theme.colors.purple[500]};
    }
  `}
`;
