import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EinstellungPage } from './einstellung.page';

const routes: Routes = [
  {
    path: '',
    component: EinstellungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EinstellungPageRoutingModule {}
