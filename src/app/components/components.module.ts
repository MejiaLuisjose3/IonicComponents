import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { SalirComponent } from './salir/salir.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent,
    SalirComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent,
    SalirComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
