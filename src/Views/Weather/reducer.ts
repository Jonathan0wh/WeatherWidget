import { LocationState, LocationActionTypes, SAVE_LOCATION } from './types';

export function locationReducer(
  state: LocationState | null = null,
  action: LocationActionTypes
): LocationState | null {
  switch (action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        ...action.location
      };

    default:
      return state;
  }
}
