import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0.8rem;
    min-height: 3.8rem;
    border-radius: 0.8rem;

    color: ${theme.colors.purple[500]};
    background-color: ${theme.colors.purple[100]};
  `}
`;
