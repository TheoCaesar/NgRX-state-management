import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions){}
    onSaveCount = createEffect(()=> this.actions$.pipe(
            ofType(increment, decrement),
            tap((actionResponse)=>{
                console.log(actionResponse);
                localStorage.setItem(
                    actionResponse.type, actionResponse.value.toString())
            })
        ), {
            dispatch:false
        }
    );
}