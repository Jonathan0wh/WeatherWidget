export interface LocationState {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: number;
}

export const SAVE_LOCATION = 'LOCATION/SAVE';

interface SaveLocationAction {
  type: typeof SAVE_LOCATION;
  location: LocationState;
}

export type LocationActionTypes = SaveLocationAction;
