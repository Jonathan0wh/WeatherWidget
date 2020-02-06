import { UnitState, UnitActionType, TOGGLE_UNIT } from './types';

export function unitReducer(
  state: UnitState = { celsius: true },
  action: UnitActionType
): UnitState {
  switch (action.type) {
    case TOGGLE_UNIT:
      return {
        ...state,
        celsius: !state.celsius
      };

    default:
      return state;
  }
}
