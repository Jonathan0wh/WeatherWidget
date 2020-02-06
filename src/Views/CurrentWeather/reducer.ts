import { CurrentState, CurrentActionTypes, SAVE_CURRENT } from './types';

export function currentReducer(
  state: CurrentState | null = null,
  action: CurrentActionTypes
): CurrentState | null {
  switch (action.type) {
    case SAVE_CURRENT:
      return {
        ...state,
        ...action.current
      };

    default:
      return state;
  }
}
