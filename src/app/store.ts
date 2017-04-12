/**
 * Created by Yu Zhang on 4/10/17.
 * Description:
 *
 * ------ maintenance history ------
 */
import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT, CHANGE, RESET } from './actions';

export interface IAppState {
  counter: number;
  title: string;
}

export const INITIAL_COUNTER: number = 0;
export const INITIAL_TITLE: string = 'Redeux Demo';

export const InitialState: IAppState = {
  counter: INITIAL_COUNTER,
  title: INITIAL_TITLE
};

export function counterReducer(state: number = INITIAL_COUNTER, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export function titleReducer(state: string = INITIAL_TITLE, action) {
  switch(action.type) {
    case CHANGE:
      return state + ' is awesome!';
    case RESET:
      return INITIAL_TITLE;
    default:
      return state;
  }
}

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  title: titleReducer
});
