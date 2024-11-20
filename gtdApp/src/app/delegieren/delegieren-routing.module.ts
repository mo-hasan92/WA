import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelegierenPage } from './delegieren.page';

const routes: Routes = [
  {
    path: '',
    component: DelegierenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelegierenPageRoutingModule {}
