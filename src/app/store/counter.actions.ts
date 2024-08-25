import { Action, createAction, props } from "@ngrx/store";

// export const increment = createAction(
//     '[counter] Increment',
//     // props<{email:string, pwd: string}>(),
//     props<{value:number}>()
// )

export const UNIQUE_IDENTIFIER = "[counter] Increment";
export class IncrementAction implements Action{
    readonly type = UNIQUE_IDENTIFIER;

    constructor(public value:number) {}
}