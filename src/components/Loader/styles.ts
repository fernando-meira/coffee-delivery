import styled, { css, keyframes } from 'styled-components';
import { CircleNotch } from 'phosphor-react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(CircleNotch)`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.purple[500]};
    animation: ${rotate} 0.8s linear infinite;
  `}
`;
