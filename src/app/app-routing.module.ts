import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopModule } from './top/top.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
