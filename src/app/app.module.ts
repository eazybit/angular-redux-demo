import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { applyMiddleware, compose } from 'redux';

import { AppComponent } from './app.component';
import { IAppState, InitialState } from './store';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {

    let middleware = [createEpicMiddleware(rootEpic)];

    ngRedux.configureStore(rootReducer, InitialState, middleware);
  }
}
