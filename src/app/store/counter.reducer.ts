import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 1000;

export const counterReducer = createReducer(
  initialState,
  on(increment, (startState)=>startState+1)
);

// export function counterReducer(state = initialState){
//     return state
// }