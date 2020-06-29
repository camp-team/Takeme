import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { MainVisualComponent } from '../main-visual/main-visual.component';


@NgModule({
  declarations: [TopComponent, MainVisualComponent],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
