import { ForecastState, ForestActionTypes, SAVE_FORECAST } from './types';

export function forecastReducer(
  state: ForecastState | null = null,
  action: ForestActionTypes
): ForecastState | null {
  switch (action.type) {
    case SAVE_FORECAST:
      return action.forecast;

    default:
      return state;
  }
}
