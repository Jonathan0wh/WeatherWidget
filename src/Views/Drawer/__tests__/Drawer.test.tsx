import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Drawer from '../Drawer';

const mockStore = configureMockStore([thunk]);

describe('<Drawer />', () => {
  it('should render by default', () => {});
});
