import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import { NativeModules } from 'react-native';

configure({ adapter: new Adapter() });

NativeModules.RNPermissions = {};

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ toggleDrawer: jest.fn() })
}));
jest.mock('@react-navigation/drawer', () => ({
  createNavigatorFactory: jest.fn()
}));
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);
