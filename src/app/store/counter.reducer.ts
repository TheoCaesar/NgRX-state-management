import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initialState = 1000;

export const counterReducer = createReducer(
  initialState,
  on(increment, (startState, args)=>startState+args.value), 
  on (decrement, (startState, args)=>startState - args.value),
  on(set, (startState, args)=>args.value)
);

// export function counterReducer(
//   state = initialState, action: IncrementAction | Action){
//     //update state based on action dispatched
//     if (action.type === UNIQUE_IDENTIFIER){
//       // return state + 1;
//       return state + (action as IncrementAction).value;
//     }
//     return state
// }