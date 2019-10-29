import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compon2',
  templateUrl: './compon2.component.html',
  styleUrls: ['./compon2.component.css']
})
export class Compon2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
     @Output() public parentEvent=new EventEmitter();
    grand(value)
    {
     this.parentEvent.emit(value);
    }
}
