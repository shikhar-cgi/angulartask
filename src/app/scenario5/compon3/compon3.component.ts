import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compon3',
  templateUrl: './compon3.component.html',
  styleUrls: ['./compon3.component.css']
})
export class Compon3Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


fireEvent()
{
  this.childEvent.emit("hi grand-parent");
}

}
