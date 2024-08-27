import { Component } from '@angular/core';
import { init } from './store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store){}
  ngOnInit() {
    this.store.dispatch(init())
    console.log("init dispatched");
    
  }
}
