import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusdetailPage } from './busdetail';

@NgModule({
  declarations: [
    BusdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BusdetailPage),
  ],
})
export class BusdetailPageModule {}
