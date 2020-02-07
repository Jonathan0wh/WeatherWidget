import { CurrentState } from 'Views/CurrentWeather/types';

export type ForecastState = Array<CurrentState>;

export const SAVE_FORECAST = 'FORECAST/SAVE';

interface SaveForecastAction {
  type: typeof SAVE_FORECAST;
  forecast: ForecastState;
}

export type ForestActionTypes = SaveForecastAction;
