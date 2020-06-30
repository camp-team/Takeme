import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { MainVisualComponent } from '../main-visual/main-visual.component';
import { NewArrivalComponent } from '../new-arrival/new-arrival.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TopComponent, MainVisualComponent, NewArrivalComponent],
  imports: [CommonModule, TopRoutingModule, MatCardModule],
})
export class TopModule {}
