import { SAVE_CURRENT } from './../types';
import { saveCurrent } from 'Views/CurrentWeather';

describe('CurrentWeather - Actions', () => {
  it('should create an action to save current weather data', () => {
    const mockData = require('./mockResponse.json');
    const expectedAction = {
      type: SAVE_CURRENT,
      current: mockData
    };

    expect(saveCurrent(mockData)).toEqual(expectedAction);
  });
});
