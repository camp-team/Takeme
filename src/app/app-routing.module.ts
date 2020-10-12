import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopModule } from './top/top.module';
import { AuthGuard } from './guards/auth.guard';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
  },
  {
    path: 'mypage',
    pathMatch: 'full',
    loadChildren: () =>
      import('./mypage/mypage.module').then((m) => m.MypageModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
