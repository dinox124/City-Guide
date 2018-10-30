import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusmorePage } from './busmore';

@NgModule({
  declarations: [
    BusmorePage,
  ],
  imports: [
    IonicPageModule.forChild(BusmorePage),
  ],
})
export class BusmorePageModule {}
