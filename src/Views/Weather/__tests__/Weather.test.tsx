import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Weather from '../Weather';

const mockStore = configureMockStore([thunk]);

describe('<Weather />', () => {
  it('should render by default', () => {
  });
});
