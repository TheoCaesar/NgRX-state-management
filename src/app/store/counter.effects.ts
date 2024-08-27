import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { countSelector } from "./counter.selector";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, 
        private store: Store<{counter:number}>){}

    onSaveCount = createEffect(()=> this.actions$.pipe(
            ofType(increment, decrement),
            // withLatestFrom(this.store.select('counter')),
            withLatestFrom(this.store.select(countSelector)),
            tap(([action, counter])=>{
                console.log(action, counter);
                localStorage.setItem(
                    action.type, counter.toString())
            })
        ), {
            dispatch:false
        }
    );
}