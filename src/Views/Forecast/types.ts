export interface DailyForecastState {
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
  max_temp: number;
  min_temp: number;
  rh: number;
  weather: {
    icon: string;
    code: string;
    description: string;
  };
  precip: number;
}

export type ForecastState = Array<DailyForecastState>;

export const SAVE_FORECAST = 'FORECAST/SAVE';

interface SaveForecastAction {
  type: typeof SAVE_FORECAST;
  forecast: ForecastState;
}

export type ForestActionTypes = SaveForecastAction;
