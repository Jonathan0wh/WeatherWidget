import { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import Config from 'react-native-config';

import { getLocationPermission } from 'utils/permission';

export const useLocation = () => {
  const [locationParam, setLocationParam] = useState({
    query: Config.DEFAULT_LOCATION
  });

  useEffect(() => {
    getLocationPermission()
      .then(result => {
        if (result) {
          Geolocation.getCurrentPosition(
            position => {
              setLocationParam({
                query:
                  position.coords.latitude + ',' + position.coords.longitude
              });
            },
            error => {
              if (__DEV__) console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }
      })
      .catch(error => {
        if (__DEV__) console.log(error);
      });
  }, []);

  return locationParam;
};
