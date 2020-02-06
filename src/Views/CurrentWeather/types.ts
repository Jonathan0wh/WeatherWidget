export interface CurrentState {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: Array<string>;
  weather_descriptions: Array<string>;
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
}

export const SAVE_CURRENT = 'CURRENT/SAVE';

interface SaveCurrentAction {
  type: typeof SAVE_CURRENT;
  current: CurrentState;
}

export type CurrentActionTypes = SaveCurrentAction;
