import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EinstellungPageRoutingModule } from './einstellung-routing.module';

import { EinstellungPage } from './einstellung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EinstellungPageRoutingModule
  ],
  declarations: [EinstellungPage]
})
export class EinstellungPageModule {}
