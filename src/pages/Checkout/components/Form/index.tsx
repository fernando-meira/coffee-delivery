import { MapPinLine } from 'phosphor-react';

import { BaseInput } from '~/components';

import * as S from './styles';

export function Form() {
  function handleSubmit(event: React.FormEvent<EventTarget>): void {
    event.preventDefault();

    console.log(event);
  }

  return (
    <S.Container>
      <S.FormHeader>
        <MapPinLine size={22} />

        <S.TitleWrapper>
          <S.HeaderTitle>Endereço de Entrega</S.HeaderTitle>

          <S.HeaderSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </S.HeaderSubtitle>
        </S.TitleWrapper>
      </S.FormHeader>

      <S.Form onSubmit={(event) => handleSubmit(event)}>
        <BaseInput type="text" placeholder="CEP" inputSize="medium" />

        <BaseInput
          id="street"
          type="text"
          placeholder="Rua"
          inputSize="large"
        />

        <BaseInput type="text" placeholder="Número" inputSize="medium" />

        <BaseInput type="text" placeholder="Complemento" />

        <BaseInput type="text" placeholder="Bairro" inputSize="medium" />

        <BaseInput type="text" placeholder="Cidade" />

        <BaseInput type="text" placeholder="UF" inputSize="small" />
      </S.Form>
    </S.Container>
  );
}
