import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ContinentsPage } from './continents.page';

const routes: Routes = [
 /* {
    path: '',
    component: ContinentsPage
  },*/
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinentsPageRoutingModule {}


