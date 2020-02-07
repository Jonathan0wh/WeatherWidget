export interface CurrentState {
  lat: number;
  lon: number;
  timezone: string;
  ob_time: string;
  datetime: string;
  ts: number;
  city_name: string;
  country_code: string;
  state_code: string;
  wind_spd: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  temp: number;
  rh: number;
  weather: {
    icon: string;
    code: string;
    description: string;
  };
  precip: number;
}

export const SAVE_CURRENT = 'CURRENT/SAVE';

interface SaveCurrentAction {
  type: typeof SAVE_CURRENT;
  current: CurrentState;
}

export type CurrentActionTypes = SaveCurrentAction;
