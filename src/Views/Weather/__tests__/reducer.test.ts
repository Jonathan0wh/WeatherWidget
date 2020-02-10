import { currentReducer } from '../reducer';
import { saveCurrent } from '../actions';

describe('Forecast - reducer', () => {
  const mockResponse = require('./__mocks__/response.json');
  const mockData = mockResponse.data[0];

  it('should handle SAVE_FORECAST action', () => {
    const state = null;
    const action = saveCurrent(mockData);

    const expectedState = mockData;

    expect(currentReducer(state, action)).toEqual(expectedState);
  });
});
