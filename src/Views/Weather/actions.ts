import { LocationState, LocationActionTypes, SAVE_LOCATION } from './types';

export function saveLocation(location: LocationState): LocationActionTypes {
  return {
    type: SAVE_LOCATION,
    location
  };
}
