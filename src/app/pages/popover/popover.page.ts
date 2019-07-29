import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  titulo: string;
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async MostrarPop(evento) {
    const mostrar = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });
  await mostrar.present();
  // const { data } = await mostrar.onDidDismiss();
  const { data } = await mostrar.onWillDismiss();
  this.titulo = data.item;
  console.log(data);
  }
}
