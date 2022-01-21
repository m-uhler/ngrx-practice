import {Action} from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World!', action: Action) {

  console.log(action.type, state);

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola mundo!';
    case 'French':
      return state = 'Bonjour le monde!';
    default:
      return state;
  }
}

