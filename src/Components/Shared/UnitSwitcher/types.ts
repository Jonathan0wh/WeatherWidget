export interface UnitState {
  celsius: boolean;
}

export const TOGGLE_UNIT = 'UNIT/TOGGLE';

interface UnitAction {
  type: typeof TOGGLE_UNIT;
}

export type UnitActionType = UnitAction;
