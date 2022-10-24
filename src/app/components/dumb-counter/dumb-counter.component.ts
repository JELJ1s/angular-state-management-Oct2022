import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb-counter',
  templateUrl: './dumb-counter.component.html',
  styleUrls: ['./dumb-counter.component.css']
})
export class DumbCounterComponent {

  // state - a variable of type number
  constructor() { }

  //affordances through which the user can change that state
  current = 0;
  increment(){
    this.current+= 1;
  }

  //affordances through which the user can change that state
  decrement(){
    this.current -= 1;
  }


}
