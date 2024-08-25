import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[counter] Increment',
    // props<{email:string, pwd: string}>(),
    props<{value:number}>()
)