import { ForecastState, ForestActionTypes, SAVE_FORECAST } from './types';

export function saveForecast(forecast: ForecastState): ForestActionTypes {
  return {
    type: SAVE_FORECAST,
    forecast
  };
}
