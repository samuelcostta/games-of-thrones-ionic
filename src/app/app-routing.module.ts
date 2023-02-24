import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./master/master.module').then( m => m.MasterPageModule)
  },  {
    path: 'detail',
    loadChildren: () => import('./continents/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./continents/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./continents/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'continents',
    loadChildren: () => import('./continents/continents.module').then( m => m.ContinentsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
