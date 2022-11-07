import { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'phosphor-react';

import { Loader } from '~/components';
import { getAddress } from '~/service/functions';
import { AddressType } from '~/interfaces/types/address';

import * as S from './styles';

export function Location() {
  const [latitude, setLatitude] = useState(0);
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState<AddressType>({} as AddressType);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      if (latitude) {
        setLatitude(latitude);
      }

      if (longitude) {
        setLongitude(longitude);
      }
    });
  }, []);

  useEffect(() => {
    async function fetchAddress() {
      setLoading(true);

      try {
        const addressResponse: AddressType = await getAddress({
          latitude,
          longitude,
        });

        setLocation(addressResponse);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }

    if (latitude && longitude) {
      fetchAddress();
    }
  }, [latitude, longitude]);

  const renderContent = useCallback(() => {
    if (!loading && !!location.address.city) {
      return (
        <S.LocationWrapper>
          <MapPin size={22} weight="fill" />

          <S.LocationText>{`${location?.address?.city}, ${location?.address?.state}`}</S.LocationText>
        </S.LocationWrapper>
      );
    }

    return <Loader />;
  }, [loading, location?.address?.city]);

  return <S.Container>{renderContent()}</S.Container>;
}
