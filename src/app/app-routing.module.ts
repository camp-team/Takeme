import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopModule } from './top/top.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
