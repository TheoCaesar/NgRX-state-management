import { Component,  } from '@angular/core';
import { Observable  } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent{
  count$: Observable<number> //obs naming convention
  
  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select('counter')
  }

}
