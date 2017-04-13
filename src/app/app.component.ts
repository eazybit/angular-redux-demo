import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './store';
import { INCREMENT, DECREMENT, CHANGE, RESET, START } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yu\'s Angular Redux Demo!';
  private _counter$: Observable<number>;
  private _title$: Observable<string>;
  private _ping$: Observable<string>;

  constructor(private _ngRedux: NgRedux<IAppState>) {
    this._counter$ = this._ngRedux.select<number>(['counter']);
    this._title$ = this._ngRedux.select<string>(['title']);
    this._ping$ = this._ngRedux.select<string>(['ping']);
  }

  increment() {
    this._ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this._ngRedux.dispatch({ type: DECREMENT });
  }

  changeTitle() {
    this._ngRedux.dispatch({ type: CHANGE });
  }

  resetTitle() {
    this._ngRedux.dispatch({ type: RESET });
  }

  startPinging() {
    this._ngRedux.dispatch({ type: START} );
  }
}
