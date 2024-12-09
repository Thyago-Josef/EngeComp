import { Component } from '@angular/core';
import { Artigo } from '../artigos/artigo.model';


@Component({
  selector: 'app-artigos-page',
  templateUrl: './artigos-page.component.html',
  styleUrl: './artigos-page.component.css'
})
export class ArtigosPageComponent {
  artigoData: Artigo = {
    title: 'Entendendo Componentes em Angular',
    author: 'João Silva',
    content: 'Este artigo explica o básico sobre componentes no Angular...',
    publishedDate: new Date(),
  };
}
