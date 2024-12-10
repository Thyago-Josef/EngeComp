import { Component } from '@angular/core';
import { Artigo, ArtigoMenos } from '../artigos/artigo.model';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.component.html',
  styleUrl: './fisica.component.css'
})
export class FisicaComponent {

  artigos: ArtigoMenos[] = [
    {
      id: 1,
      title: 'Medidas Físicas',
    },
    {
      id: 2,
      title: 'História da Física',
    }
  ]
}
