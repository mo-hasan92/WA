import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelegierenPageRoutingModule } from './delegieren-routing.module';

import { DelegierenPage } from './delegieren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelegierenPageRoutingModule
  ],
  declarations: [DelegierenPage]
})
export class DelegierenPageModule {}
