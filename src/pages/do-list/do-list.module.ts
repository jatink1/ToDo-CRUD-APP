import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoListPage } from './do-list';

@NgModule({
  declarations: [
    DoListPage,
  ],
  imports: [
    IonicPageModule.forChild(DoListPage),
  ],
})
export class DoListPageModule {}
