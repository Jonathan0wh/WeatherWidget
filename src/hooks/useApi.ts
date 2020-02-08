import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Config from 'react-native-config';

type ApiPayload = object | [];

interface IState {
  isLoading: boolean;
  isError: boolean;
  data?: ApiPayload;
}

const FETCH_INIT = 'FETCH/INIT';
const FETCH_SUCCESS = 'FETCH/SUCCESS';
const FETCH_FAILURE = 'FETCH/FAILURE';

interface FetchInitAction {
  type: typeof FETCH_INIT;
}

interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: ApiPayload;
}

interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
}

type FetchActionTypes =
  | FetchInitAction
  | FetchSuccessAction
  | FetchFailureAction;

const dataFetchReducer = (state: IState, action: FetchActionTypes) => {
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

export const useApi = (
  baseUrl: string = Config.API_URL,
  endpoint?: string,
  params?: object,
  runFetch: boolean = true
) => {
  const [base, setUrl] = useState(baseUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false
  });

  let paramString = '';
  if (params) {
    for (let [key, value] of Object.entries(params)) {
      paramString += key + '=' + value + '&';
    }
  } else paramString = '';
  const url = `${base}/${endpoint}?key=${Config.ACCESS_KEY}&${paramString}`;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });
      try {
        const result = await axios(url);
        dispatch({ type: FETCH_SUCCESS, payload: result.data });
      } catch (error) {
        __DEV__ && console.log(error);
        dispatch({ type: FETCH_FAILURE });
      }
    };

    runFetch && fetchData();
  }, [url, runFetch]);

  return [state, setUrl];
};
