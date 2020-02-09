import { unitReducer } from '../reducer';
import { toggleUnit } from '../actions';

describe('UnitSwitcher - reducer', () => {
  it('should handle TOGGLE_UNIT action', () => {
    const state = { celsius: false };
    const action = toggleUnit();

    const expectedState = { celsius: true };

    expect(unitReducer(state, action)).toEqual(expectedState);
  });
});
