import { createAction } from "@ngrx/store";

export const increment = createAction(
    '[counter] Increment'
)
//prefix for unique identifier for action is only a convention