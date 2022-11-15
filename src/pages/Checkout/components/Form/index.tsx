import * as zod from 'zod';
import { MapPinLine } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '~/components';
import { CardHeader } from '../';

import * as S from './styles';

type NewAddressData = zod.infer<typeof newAddressRegisterSchema>;

const newAddressRegisterSchema = zod.object({
  'zip-code': zod.number().min(1, 'Informe o código postal.'),
  street: zod.string().min(1, 'Informe a rua.'),
  number: zod.number().min(1, 'Informe o número.'),
  complement: zod.string().optional(),
  district: zod.string().optional(),
  city: zod.string().min(1, 'Informe o nome da cidade.'),
  state: zod.string().max(2),
});

export function Form() {
  const newAddress = useForm<NewAddressData>({
    resolver: zodResolver(newAddressRegisterSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = newAddress;

  console.log('😁 ~ errors', errors);

  const onSubmit: SubmitHandler<NewAddressData> = (data) => console.log(data);

  return (
    <S.Container>
      <CardHeader
        title="Endereço de Entrega"
        icon={<MapPinLine size={22} />}
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="CEP"
          inputSize="medium"
          error={errors['zip-code']?.message}
          {...register('zip-code', {
            maxLength: 8,
            min: 18,
            max: 99,
            valueAsNumber: true,
            pattern: /^(\d{0,5}|\d{5}\-\d{0,3})$/s,
          })}
        />

        <Input
          id="street"
          type="text"
          placeholder="Rua"
          inputSize="large"
          {...register('street')}
          error={errors['street']?.message}
        />

        <S.Row>
          <Input
            type="text"
            inputSize="medium"
            placeholder="Número"
            error={errors['number']?.message}
            {...register('number', { valueAsNumber: true })}
          />

          <Input
            type="text"
            label="Opcional"
            inputSize="large"
            placeholder="Complemento"
            {...register('complement')}
            error={errors['complement']?.message}
          />
        </S.Row>

        <S.Row>
          <Input
            type="text"
            inputSize="medium"
            placeholder="Bairro"
            {...register('district')}
            error={errors['district']?.message}
          />

          <Input
            type="text"
            inputSize="large"
            placeholder="Cidade"
            {...register('city')}
            error={errors['city']?.message}
          />

          <Input
            type="text"
            placeholder="UF"
            inputSize="small"
            {...register('state')}
            error={errors['state']?.message}
          />
        </S.Row>

        <button type="submit">Submit</button>
      </S.Form>
    </S.Container>
  );
}
