import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

configure({ adapter: new Adapter() });

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ toggleDrawer: jest.fn() })
}));
