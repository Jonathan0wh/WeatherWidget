import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from './types';
import { dataFetchReducer } from './reducers';

/**
 * Custom hook for getting a handler which let you send API request and get fetching states and response data
 * This hook returens a setUrl handler and fetching state object. When you use setUrl, it will start fetching data because of the url change
 * @param apiUrl Full API url to be used. You need to construct it to include all endpoint path and params before passing it in here
 * @param initialData Initial data set in the state
 */
export const useApiHandler = (apiUrl: string, initialData: object) => {
  const [url, setUrl] = useState(apiUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });
  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });
      try {
        const result = await axios(url);
        if (!didCancel) dispatch({ type: FETCH_SUCCESS, payload: result.data });
      } catch (error) {
        __DEV__ && console.log(error);
        if (!didCancel) dispatch({ type: FETCH_FAILURE });
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
