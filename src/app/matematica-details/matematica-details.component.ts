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
      title: 'Conjuntos numéricos',
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

    {
      id: 2,
      title: 'Numeros primos',
      author: 'Thyago',
      content:
        `
        <div class="artigo">
  <h1 class="titulo">Números Primos</h1>
  <p class="descricao">
    Números primos são aqueles que possuem exatamente dois divisores: 
    <strong>1</strong> e ele mesmo. Em outras palavras, um número primo é maior 
    que 1 e não pode ser dividido por nenhum outro número além de 1 e dele 
    mesmo sem deixar resto.
  </p>

  <h2>Exemplos de números primos:</h2>
  <ul>
    <li>2 (único número primo par)</li>
    <li>3</li>
    <li>5</li>
    <li>7</li>
    <li>11</li>
    <li>13</li>
    <li>17</li>
    <li>19</li>
    <li>23</li>
  </ul>

  <h2>Como verificar se um número é primo:</h2>
  <ol>
    <li>Verifique se o número é maior que 1.</li>
    <li>
      Teste a divisibilidade de <code>n</code> pelos números de 2 até 
      <code>√n</code>:
      <ul>
        <li>Se <code>n</code> for divisível por algum número nesse intervalo, ele não é primo.</li>
        <li>Caso contrário, ele é primo.</li>
      </ul>
    </li>
  </ol>

  <h2>Código em Java para verificar se um número é primo:</h2>
  <pre>
    <code>
public class VerificarPrimo {
    public static boolean ehPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int numero = 29;
        if (ehPrimo(numero)) {
            System.out.println(numero + " é primo.");
        } else {
            System.out.println(numero + " não é primo.");
        }
    }
}
    </code>
  </pre>
</div>
 `,
      publishedDate: new Date(),
    }


  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artigo = this.artigos.find(artigo => artigo.id === id);
  }

}

