import { Component } from '@angular/core';
import { ArtigoMenos } from '../artigos/artigo.model';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrl: './matematica.component.css'
})
export class MatematicaComponent {
  artigos: ArtigoMenos[] = [
    {
      id: 1,
      title: 'Matematica de que?',
    }
  ]
}
