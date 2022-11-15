import styled, { css, DefaultTheme } from 'styled-components';

const containerModifiers = {
  isSelected: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.purple[100]};

    box-shadow: 0 0 0 1px ${theme.colors.purple[500]};
  `,
};

export const Container = styled.button<{ isSelected?: boolean }>`
  ${({ theme, isSelected }) => css`
    border: 0;
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

    ${isSelected && containerModifiers.isSelected(theme)};
  `}
`;
