import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import UnitSwitcher from '../UnitSwitcher';

const mockStore = configureMockStore([thunk]);

describe('<UnitSwitcher />', () => {
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
        <UnitSwitcher />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
