/**
 * Created by Yu Zhang on 4/10/17.
 * Description:
 *
 * ------ maintenance history ------
 */

export interface IAppState {
  counter: number;
  title: string;
  ping: boolean;
}

export const INITIAL_COUNTER: number = 0;
export const INITIAL_TITLE: string = 'Redeux Demo';
export const INITIAL_PING: boolean = false;

export const InitialState: IAppState = {
  counter: INITIAL_COUNTER,
  title: INITIAL_TITLE,
  ping: INITIAL_PING
};
