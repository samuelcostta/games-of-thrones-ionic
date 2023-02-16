import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex01Page } from './ex01.page';

const routes: Routes = [
  {
    path: '',
    component: Ex01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex01PageRoutingModule {}
