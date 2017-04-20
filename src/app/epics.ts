/**
 * Created by Yu Zhang on 4/12/17.
 * Description:
 *
 * ------ maintenance history ------
 */
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

import { START, END } from './actions';

export const pingEpic = action$ =>
  action$.ofType(START)
    .delay(3000)
    .mapTo({ type: END });

export const rootEpic = combineEpics(
  pingEpic
);
