import { useForm } from 'react-hook-form';
import { MapPinLine } from 'phosphor-react';

import { Input } from '~/components';
import { CardHeader } from '../';

import * as S from './styles';

export function Form() {
  const { register, handleSubmit, watch } = useForm();

  console.log(watch('zip-code'));

  function handleSaveAddress(data: any) {
    console.log(data);
  }

  return (
    <S.Container>
      <CardHeader
        title="Endereço de Entrega"
        icon={<MapPinLine size={22} />}
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />

      <S.Form onSubmit={handleSubmit(handleSaveAddress)}>
        <Input
          type="text"
          placeholder="CEP"
          inputSize="medium"
          {...register('zip-code')}
        />

        <Input
          id="street"
          type="text"
          placeholder="Rua"
          inputSize="large"
          {...register('street')}
        />

        <S.Row>
          <Input
            type="text"
            placeholder="Número"
            inputSize="medium"
            {...register('number')}
          />

          <Input
            type="text"
            label="Opcional"
            inputSize="large"
            placeholder="Complemento"
            {...register('complement')}
          />
        </S.Row>

        <S.Row>
          <Input
            type="text"
            placeholder="Bairro"
            inputSize="medium"
            {...register('district')}
          />

          <Input
            type="text"
            placeholder="Cidade"
            inputSize="large"
            {...register('city')}
          />

          <Input
            type="text"
            placeholder="UF"
            inputSize="small"
            {...register('state')}
          />
        </S.Row>
      </S.Form>
    </S.Container>
  );
}
