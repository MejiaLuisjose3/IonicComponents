import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { SalirComponent } from 'src/app/components/salir/salir.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService,
              private popCtrl: PopoverController) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpt();
    console.log(this.dataService.get().subscribe(data => {console.log(data); }));
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  Cerrar() {
    console.log('tocado');
  }

  async MostrarPop( ev: any) {
    const pop = await this.popCtrl.create({
      component: SalirComponent,
      event: ev,
      translucent: true
    });

    return await pop.present();
  }

}
