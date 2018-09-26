import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallInPage } from './call-in';

@NgModule({
  declarations: [
    CallInPage,
  ],
  imports: [
    IonicPageModule.forChild(CallInPage),
  ],
})
export class CallInPageModule {}
