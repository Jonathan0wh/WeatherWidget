import { SAVE_CURRENT } from './../types';
import { saveCurrent } from '../actions';

describe('CurrentWeather - Actions', () => {
  it('should create an action to save current weather data', () => {
    const mockResponse = require('./__mocks__/response.json');
    const mockData = mockResponse.data[0];

    const expectedAction = {
      type: SAVE_CURRENT,
      current: mockData
    };

    expect(saveCurrent(mockData)).toEqual(expectedAction);
  });
});
