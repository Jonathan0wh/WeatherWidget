type ApiPayload = any;

export interface IState {
  isLoading: boolean;
  isError: boolean;
  data?: ApiPayload;
}

export const FETCH_INIT = 'FETCH/INIT';
export const FETCH_SUCCESS = 'FETCH/SUCCESS';
export const FETCH_FAILURE = 'FETCH/FAILURE';

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

export type FetchActionTypes =
  | FetchInitAction
  | FetchSuccessAction
  | FetchFailureAction;
