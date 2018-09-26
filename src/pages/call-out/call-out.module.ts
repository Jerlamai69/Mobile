import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallOutPage } from './call-out';

@NgModule({
  declarations: [
    CallOutPage,
  ],
  imports: [
    IonicPageModule.forChild(CallOutPage),
  ],
})
export class CallOutPageModule {}
