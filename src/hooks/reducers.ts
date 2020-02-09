import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  IState,
  FetchActionTypes
} from './types';

/**
 * Reducer for API fetching lifecycle hooks
 * @param state {isError, isLoading, data} for data fetching
 * @param action {type, payload} for dispatching different api fetching signals
 */
export const dataFetchReducer = (state: IState, action: FetchActionTypes) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      throw new Error();
  }
};
