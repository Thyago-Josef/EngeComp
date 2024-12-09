import { Component, Input } from '@angular/core';
import { Artigo } from './artigo.model';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.css'
})
export class ArtigosComponent {
  @Input() artigo!: Artigo;
}
