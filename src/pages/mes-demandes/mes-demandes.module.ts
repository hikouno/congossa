import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesDemandesPage } from './mes-demandes';

@NgModule({
  declarations: [
    MesDemandesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesDemandesPage),
  ],
})
export class MesDemandesPageModule {}
