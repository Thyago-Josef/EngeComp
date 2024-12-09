import { Component } from '@angular/core';
import { Artigo } from '../artigos/artigo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matematica-details',
  templateUrl: './matematica-details.component.html',
  styleUrl: './matematica-details.component.css'
})
export class MatematicaDetailsComponent {
  artigo?: Artigo;

  artigos: Artigo[] = [
    {
      id: 1,
      title: 'Medidas Fisicas',
      author: 'Thyago',
      content:
        `
        <div class="numerical-sets">
  <h1>Conjuntos Numéricos</h1>

  <div class="set">
    <h2>\(\mathbb{N}\): Naturais</h2>
    <p>Definição: Inclui números usados para contagem.</p>
    <p><strong>Exemplo:</strong> { 0, 1, 2, 3, 4, ... }</p>
  </div>

  <div class="set">
    <h2>\(\mathbb{Z}\): Inteiros</h2>
    <p>Definição: Inclui os números naturais, seus opostos (negativos) e o zero.</p>
    <p><strong>Exemplo:</strong> { ..., -3, -2, -1, 0, 1, 2, 3, ... }</p>
  </div>

  <div class="set">
    <h2>\(\mathbb{Q}\): Racionais</h2>
    <p>
      Definição: Números que podem ser representados como frações 
      <span>&#x276F; a/b &#x276E;</span>, com <em>a</em> inteiro e <em>b ≠ 0</em>.
    </p>
    <p><strong>Exemplo:</strong> { -2, 1/2, 0.75, -3.5, ... }</p>
  </div>

  <div class="set">
    <h2>\(\mathbb{I}\): Irracionais</h2>
    <p>Definição: Números que não podem ser expressos como frações.</p>
    <p><strong>Exemplo:</strong> { √2, π, e, ... }</p>
  </div>

  <div class="set">
    <h2>\(\mathbb{R}\): Reais</h2>
    <p>Definição: União dos conjuntos racionais e irracionais.</p>
    <p><strong>Exemplo:</strong> { -3, 0, 1, 2.5, √3, π, ... }</p>
  </div>

  <div class="set">
    <h2>\(\mathbb{C}\): Complexos</h2>
    <p>Definição: Números da forma <em>a + bi</em>, onde <em>a</em> e <em>b</em> são reais, e <em>i</em> é a unidade imaginária (<em>i² = -1</em>).</p>
    <p><strong>Exemplo:</strong> { 2 + 3i, -1 - 4i, 5, ... }</p>
  </div>
</div>

                `,
      publishedDate: new Date(),
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artigo = this.artigos.find(artigo => artigo.id === id);
  }

}

