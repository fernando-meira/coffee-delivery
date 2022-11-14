import { MapPinLine } from 'phosphor-react';

import { Input } from '~/components';

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
        <Input type="text" placeholder="CEP" inputSize="medium" />

        <Input id="street" type="text" placeholder="Rua" inputSize="large" />

        <S.Row>
          <Input type="text" placeholder="Número" inputSize="medium" />

          <Input
            type="text"
            label="Opcional"
            inputSize="large"
            placeholder="Complemento"
          />
        </S.Row>

        <S.Row>
          <Input type="text" placeholder="Bairro" inputSize="medium" />

          <Input type="text" placeholder="Cidade" inputSize="large" />

          <Input type="text" placeholder="UF" inputSize="small" />
        </S.Row>
      </S.Form>
    </S.Container>
  );
}
