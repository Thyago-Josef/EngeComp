import { Component } from '@angular/core';
import { Artigo } from '../artigos/artigo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'front-engcomp';
  artigoData: Artigo = {
    title: 'Entendendo Componentes em Angular',
    author: 'João Silva',
    content: 'Este artigo explica o básico sobre componentes no Angular...',
    publishedDate: new Date(),
  };
}
