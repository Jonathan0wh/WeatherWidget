import React from 'react';
import { Provider } from 'react-redux';
import 'react-native';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import SearchBox from '../SearchBox';

const mockStore = configureMockStore([thunk]);

describe('<SearchBox />', () => {
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
        <SearchBox />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
