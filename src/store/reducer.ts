import { combineReducers } from 'redux';

import { locationReducer } from 'Views/Weather';
import { currentReducer } from 'Views/CurrentWeather';
import { unitReducer } from 'Components/Shared/UnitSwitcher';

export const rootReducer = combineReducers({
  location: locationReducer,
  current: currentReducer,
  unit: unitReducer
});

export type RootState = ReturnType<typeof rootReducer>;
