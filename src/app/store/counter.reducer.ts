import { createReducer } from '@ngrx/store';

const initialState = 1000;

// export const counterReducer = createReducer(
//   initialState
// );

export function counterReducer(state = initialState){
    return state
}