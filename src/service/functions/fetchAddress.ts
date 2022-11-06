import { api } from '../config';

interface GetAddressProps {
  latitude: number;
  longitude: number;
}

export async function getAddress({ latitude, longitude }: GetAddressProps) {
  const { data } = await api.get(
    `reverse/?lat=${latitude}&lon=${longitude}&format=json`
  );

  return data;
}
