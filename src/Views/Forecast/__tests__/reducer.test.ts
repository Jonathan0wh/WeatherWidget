import { forecastReducer } from '../reducer';
import { saveForecast } from '../actions';

describe('Forecast - reducer', () => {
  const mockResponse = require('./__mocks__/response.json');
  const mockData = mockResponse.data;

  it('should handle SAVE_FORECAST action', () => {
    const state = null;
    const action = saveForecast(mockData);

    const expectedState = mockData;

    expect(forecastReducer(state, action)).toEqual(expectedState);
  });
});
