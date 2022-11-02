import styled, { css } from 'styled-components';

export const BuyWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const PriceWrapper = styled.div`
  margin-right: 0.8rem;

  display: flex;
  align-items: center;
`;

export const SmallText = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.font.base.sizes[14]};
    line-height: ${theme.font.header.lineHeight[130]};
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.base.text};
    font-size: ${theme.font.base.sizes[24]};
    font-family: ${theme.font.header.family};
    line-height: ${theme.font.header.lineHeight[130]};
    font-weight: ${theme.font.header.weight.extraBold};
  `}
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
