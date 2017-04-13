/**
 * Created by Yu Zhang on 4/12/17.
 * Description:
 *
 * ------ maintenance history ------
 */

import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT, CHANGE, RESET, START, END } from './actions';
import { INITIAL_COUNTER, INITIAL_TITLE, INITIAL_PING, IAppState } from './store';

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

export function pingReducer(state: boolean = INITIAL_PING, action) {
  switch(action.type) {
    case START:
      return true;
    case END:
      return false;
    default:
      return state;
  }
}

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  title: titleReducer,
  ping: pingReducer
});
