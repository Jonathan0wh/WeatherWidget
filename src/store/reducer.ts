import { combineReducers } from 'redux';

import { unitReducer } from 'Components/Shared/UnitSwitcher';
import { currentReducer } from 'Views/CurrentWeather';

export const rootReducer = combineReducers({
  unit: unitReducer,
  current: currentReducer
});

export type RootState = ReturnType<typeof rootReducer>;
