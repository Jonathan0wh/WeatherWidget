import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CurrentWeatherAdditional from '../CurrentWeatherAdditional';

const mockStore = configureMockStore([thunk]);

describe('<CurrentWeatherAdditional />', () => {
  it('should render by default', () => {
    const store = mockStore({
      location: null,
      current: null,
      unit: {
        celsius: true
      }
    });
    const wrapper = shallow(
      <Provider store={store}>
        <CurrentWeatherAdditional />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
