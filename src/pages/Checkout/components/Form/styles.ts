import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem;
    border-radius: 6px;

    background-color: ${theme.colors.base.card};
  `}
`;

export const FormHeader = styled.div`
  ${({ theme }) => css`
    display: flex;

    svg {
      margin-right: 1.2rem;

      color: ${theme.colors.yellow[900]};
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

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;

  gap: 1.6rem;
  display: flex;
`;
