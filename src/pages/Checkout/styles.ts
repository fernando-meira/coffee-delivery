import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  gap: 3.2rem;
  display: flex;
  justify-content: space-between;
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.base.subtitle};
    font-family: ${theme.font.header.family};
    font-size: ${theme.font.header.sizes[18]};
    font-weight: ${theme.font.header.weight.bold};
  `}
`;

export const Section = styled.section``;

export const FormWrapper = styled.div``;

export const CoffeeCard = styled.div``;
