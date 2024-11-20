import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EingangPage } from './eingang.page';

const routes: Routes = [
  {
    path: '',
    component: EingangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EingangPageRoutingModule {}
