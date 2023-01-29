import { useNavigate } from 'react-router-dom';
import { Trash } from 'phosphor-react';

import * as S from './styles';
import { Counter } from '~/components';
import { useCart } from '~/context/CartContext';
import { formatCurrency, formatPrice } from '~/functions';

export function CoffeeCard() {
  const navigate = useNavigate();
  const { items, removeItem } = useCart();

  const handleSumAmountItems = () => {
    if (items) {
      return items?.reduce(
        (previous, current) => previous + current.price * current.amount,
        0
      );
    }

    return 0;
  };

  return (
    <S.Container>
      <S.CoffeeList>
        {items?.map((coffee) => (
          <S.CoffeeListItem key={coffee.id}>
            <S.ImageList src={coffee.image} alt={coffee.title} />

            <S.DescriptionItemWrapper>
              <S.CoffeeTitle>{coffee.title}</S.CoffeeTitle>

              <S.AmountWrapper>
                <Counter
                  size="small"
                  coffeeData={coffee}
                  amount={coffee.amount}
                />

                <S.RemoveButton onClick={() => removeItem(coffee.id)}>
                  <Trash />
                  Remover
                </S.RemoveButton>
              </S.AmountWrapper>
            </S.DescriptionItemWrapper>

            <S.CoffeePrice>
              {formatCurrency(coffee.price * coffee.amount)}
            </S.CoffeePrice>
          </S.CoffeeListItem>
        ))}
      </S.CoffeeList>

      <S.OrderResume>
        <S.ResumeWrapper>
          <S.ResumeNormalText>Total dos items</S.ResumeNormalText>

          <S.ResumeNormalText size="medium">
            {formatCurrency(handleSumAmountItems())}
          </S.ResumeNormalText>
        </S.ResumeWrapper>

        <S.ResumeWrapper>
          <S.ResumeNormalText>Entrega</S.ResumeNormalText>

          <S.ResumeNormalText size="medium">
            {formatCurrency(3.5)}
          </S.ResumeNormalText>
        </S.ResumeWrapper>

        <S.ResumeWrapper>
          <S.ResumoStrongText>Total</S.ResumoStrongText>

          <S.ResumoStrongText>
            {formatCurrency(handleSumAmountItems() + 3.5)}
          </S.ResumoStrongText>
        </S.ResumeWrapper>
      </S.OrderResume>

      <S.ButtonResume onClick={() => navigate('/success')}>
        Confirmar pedido
      </S.ButtonResume>
    </S.Container>
  );
}
