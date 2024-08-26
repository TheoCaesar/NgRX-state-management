import { createSelector } from "@ngrx/store";

export const countSelector = (storeState: {
    counter: number,
}) => storeState.counter;

export const doubleCountSelector = (storeState: {
    counter: number,
}) => storeState.counter * 2;

export const countByTwo = createSelector(
    countSelector,
    (response)=>response * 2
)