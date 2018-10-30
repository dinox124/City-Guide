import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusInfoPage } from './bus-info';

@NgModule({
  declarations: [
    BusInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BusInfoPage),
  ],
})
export class BusInfoPageModule {}
