import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exemplo1',
    loadChildren: () => import('./exemplo1/exemplo1.module').then( m => m.Exemplo1PageModule)
  },*/
  {
    path: '',
    loadChildren: () => import('./master/master.module').then( m => m.MasterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
