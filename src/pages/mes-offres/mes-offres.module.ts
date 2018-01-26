import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesOffresPage } from './mes-offres';

@NgModule({
  declarations: [
    MesOffresPage,
  ],
  imports: [
    IonicPageModule.forChild(MesOffresPage),
  ],
})
export class MesOffresPageModule {}
