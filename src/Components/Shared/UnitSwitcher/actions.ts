import { UnitActionType, TOGGLE_UNIT } from './types';

export function toggleUnit(): UnitActionType {
  return {
    type: TOGGLE_UNIT
  };
}
