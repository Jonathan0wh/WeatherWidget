import { TOGGLE_UNIT } from './../types';
import { toggleUnit } from '../actions';

describe('UnitSwitcher - Actions', () => {
  it('should create an action to toggle unit', () => {
    const expectedAction = {
      type: TOGGLE_UNIT
    };

    expect(toggleUnit()).toEqual(expectedAction);
  });
});
