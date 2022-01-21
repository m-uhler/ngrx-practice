import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from '@ngrx/store';

interface AppState {
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }

  onSpanishMessage(){
    this.store.dispatch({type: 'SPANISH'})
  }

  onFrenchMessage(){
    this.store.dispatch({type: 'FRENCH'})
  }


}
