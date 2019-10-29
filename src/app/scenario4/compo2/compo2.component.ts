import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent=new EventEmitter();
  fireEvent()
  {
     this.childEvent.emit('HI PARENT');
  }
}
