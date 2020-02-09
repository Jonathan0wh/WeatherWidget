import { SAVE_FORECAST } from './../types';
import { saveForecast } from '../actions';

describe('CurrentWeather - Actions', () => {
  it('should create an action to save current weather data', () => {
    const mockResponse = require('./__mocks__/response.json');
    const mockData = mockResponse.data;

    const expectedAction = {
      type: SAVE_FORECAST,
      forecast: mockData
    };

    expect(saveForecast(mockData)).toEqual(expectedAction);
  });
});
