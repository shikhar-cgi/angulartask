import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent=new EventEmitter();
  fireEvent()
  {
     this.childEvent.emit('HI Child');
  }
}
