import { combineReducers } from 'redux';

import { unitReducer } from 'Components/Shared/UnitSwitcher';
import { currentReducer } from 'Views/Weather';
import { forecastReducer } from 'Views/Forecast';

export const rootReducer = combineReducers({
  unit: unitReducer,
  current: currentReducer,
  forecast: forecastReducer
});

export type RootState = ReturnType<typeof rootReducer>;
