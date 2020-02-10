import { CurrentState, CurrentActionTypes, SAVE_CURRENT } from './types';

export function saveCurrent(current: CurrentState): CurrentActionTypes {
  return {
    type: SAVE_CURRENT,
    current
  };
}
