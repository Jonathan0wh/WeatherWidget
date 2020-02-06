import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export async function getLocationPermission(): Promise<boolean> {
  let result: string;

  if (Platform.OS === 'ios')
    result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  else result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

  if (result === RESULTS.GRANTED) return true;
  else if (result === RESULTS.UNAVAILABLE || result === RESULTS.BLOCKED)
    return false;
  else {
    if (Platform.OS === 'ios')
      result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    else result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.GRANTED) return true;
    else return false;
  }
}
