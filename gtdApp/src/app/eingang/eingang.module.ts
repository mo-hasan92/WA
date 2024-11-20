import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EingangPageRoutingModule } from './eingang-routing.module';

import { EingangPage } from './eingang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EingangPageRoutingModule
  ],
  declarations: [EingangPage]
})
export class EingangPageModule {}
