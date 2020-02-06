import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ForecastDaily from '../ForecastDaily';

const mockStore = configureMockStore([thunk]);

describe('<ForecastDaily />', () => {
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
        <ForecastDaily index={0} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with Farenheight', () => {
    const store = mockStore({
      location: {},
      current: {},
      unit: {
        celsius: false
      }
    });
    const wrapper = shallow(
      <Provider store={store}>
        <ForecastDaily index={0} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
