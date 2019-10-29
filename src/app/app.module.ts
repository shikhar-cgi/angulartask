import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Container1Component } from './container1/container1.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Component2Component } from './scenario2/component2/component2.component';
import { Comp1Component } from './scenario3/comp1/comp1.component';
import { Comp2Component } from './scenario3/comp2/comp2.component';
import { Compo1Component } from './scenario4/compo1/compo1.component';
import { Compo2Component } from './scenario4/compo2/compo2.component';
import { Compon1Component } from './scenario5/compon1/compon1.component';
import { Compon2Component } from './scenario5/compon2/compon2.component';
import { Compon3Component } from './scenario5/compon3/compon3.component';
import { ParentComponent } from './scenario6/parent/parent.component';
import { Child1Component } from './scenario6/child1/child1.component';
import { Child2Component } from './scenario6/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Container1Component,
    Component1Component,
    Component2Component,
    Comp1Component,
    Comp2Component,
    Compo1Component,
    Compo2Component,
    Compon1Component,
    Compon2Component,
    Compon3Component,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
