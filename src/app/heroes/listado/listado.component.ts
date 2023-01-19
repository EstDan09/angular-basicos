import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Batman', 'Robin', 'Batgirl', 'Nightwing'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando...');
    let heroesNew= this.heroes.shift();
    this.heroeBorrado = heroesNew || '';
  }

}
