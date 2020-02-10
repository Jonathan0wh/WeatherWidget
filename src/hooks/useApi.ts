import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Config from 'react-native-config';

import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from './types';
import { dataFetchReducer } from './reducers';

/**
 * Custom hook for sending API request and get fetching states and response data
 * This hook runs fetch immediately when you useApi if runFetch is true
 * @param baseUrl The base url of the API. default to API_URL in .env file
 * @param endpoint endpoint relative path to the base url. For example, /forecast
 * @param params Object for url parameters. For example, {lat: 0, lon: 0} will be transformed into &lan=0&lon=0
 * @param runFetch Flag for when to run fetch. Could pass a variable to conditionally run the fetch
 */
export const useApi = (
  baseUrl: string = Config.API_URL,
  endpoint?: string,
  params?: object,
  runFetch: boolean = true
) => {
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
  const url = `${baseUrl}/${endpoint}?key=${Config.ACCESS_KEY}&${paramString}`;

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      console.log(url); // FIXME: delete debugging
      dispatch({ type: FETCH_INIT });
      try {
        const result = await axios(url);
        if (!didCancel) dispatch({ type: FETCH_SUCCESS, payload: result.data });
      } catch (error) {
        __DEV__ && console.log(error);
        if (!didCancel) dispatch({ type: FETCH_FAILURE });
      }
    };

    runFetch && fetchData();

    return () => {
      didCancel = true;
    };
  }, [url, runFetch]);

  return state;
};
