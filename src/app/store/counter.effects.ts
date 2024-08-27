import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { countSelector } from "./counter.selector";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, 
        private store: Store<{counter:number}>){}

    onReloadPage = createEffect(()=>
        this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                console.log('heard init dispatch...')
                const storedCounter = localStorage.getItem('count');
                return (storedCounter) ?
                     of(set({value: +storedCounter})) : 
                     of (set({value : 0}))
                    
            })
        )
    , {dispatch:false})

    onSaveCount = createEffect(()=> this.actions$.pipe(
            ofType(increment, decrement),
            // withLatestFrom(this.store.select('counter')),
            withLatestFrom(this.store.select(countSelector)),
            tap(([action, counter])=>{
                console.log(action, counter);
                localStorage.setItem(
                    // action.type, counter.toString())
                    "count", counter.toString())
            })
        ), {
            dispatch:false
        }
    );
}