import styled, { css, DefaultTheme } from 'styled-components';

const resumeTextModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.base.sizes[14]};
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem;
    border-radius: 6px 44px;

    background-color: ${theme.colors.base.card};

    @media (max-width: 720px) {
      padding: 1.6rem;
    }
  `}
`;

export const CoffeeList = styled.ul``;

export const CoffeeListItem = styled.li`
  margin-bottom: 2.4rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};

  display: flex;
  justify-content: space-between;

  list-style: none;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DescriptionItemWrapper = styled.div`
  margin: 0 5rem 0 2rem;

  display: flex;
  align-items: baseline;
  flex-direction: column;
`;

export const AmountWrapper = styled.div`
  margin-top: 0.8rem;

  display: flex;
  align-items: center;
`;

export const ImageList = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

export const CoffeeTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-size: ${theme.font.base.sizes[16]};
  `}
`;

export const CoffeePrice = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.font.base.sizes[16]};
    font-weight: ${theme.font.base.weight.bold};
  `}
`;

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 0.8rem;
    border-radius: 6px;
    min-height: 3.2rem;
    margin-left: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    background-color: ${theme.colors.base.button};

    svg {
      margin-right: 0.4rem;
      color: ${theme.colors.purple[500]};
    }
  `}
`;

export const OrderResume = styled.div`
  width: 100%;
`;

export const ResumeWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p + p {
    margin-top: 1.2rem;
  }
`;

export const ResumeNormalText = styled.p<{ size?: 'medium' }>`
  ${({ size, theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.font.base.sizes[14]};

    ${!!size && resumeTextModifiers[size](theme)};
  `}
`;

export const ResumoStrongText = styled.strong`
  ${({ theme }) => css`
    margin-top: 1.2rem;

    color: ${theme.colors.base.subtitle};
    font-size: ${theme.font.base.sizes[20]};
    font-weight: ${theme.font.base.weight.bold};
  `}
`;

export const ButtonResume = styled.button`
  width: 100%;
  border: none;
  padding: 1.2rem;
  margin-top: 2.4rem;
  border-radius: 6px;

  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.base.white};
  font-size: ${({ theme }) => theme.font.base.sizes[14]};
  font-weight: ${({ theme }) => theme.font.base.weight.bold};
  background-color: ${({ theme }) => theme.colors.yellow[500]};

  @media (max-width: 720px) {
    border-radius: 6px 44px;
  }
`;
