import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CurrentWeather from '../CurrentWeather';

const mockStore = configureMockStore([thunk]);

describe('<CurrentWeather />', () => {
  it('should render by default', () => {
    /* const store = mockStore({
      location: null,
      current: null,
      unit: {
        celsius: true
      }
    });
    const wrapper = shallow(
      <Provider store={store}>
        <CurrentWeather />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot(); */
  });
});
