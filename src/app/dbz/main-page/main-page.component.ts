import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  elDefault: Personaje ={
    nombre: "Gohan",
    poder: 9500
  }

  constructor(private dbzService: DbzService ) {
    
  }
  
}
