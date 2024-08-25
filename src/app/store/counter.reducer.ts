import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 1000;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (startState, args)=>startState+args.value)
// );

export function counterReducer(state = initialState, action: any){
  //update state based on action dispatched
  if (action.type === '[counter] Increment'){
    // return state + 1;
    return state + action.value;
  }
  return state
}