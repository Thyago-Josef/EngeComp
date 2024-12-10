import { Component } from '@angular/core';
import { Artigo } from '../artigos/artigo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-fisica-details',
    templateUrl: './fisica-details.component.html',
    styleUrl: './fisica-details.component.css'
})
export class FisicaDetailsComponent {
    artigo?: Artigo;

    artigos: Artigo[] = [
        {
            id: 1,
            title: 'Medidas Fisicas',
            author: 'Thyago',
            content:
                `
    <h1>Unidades de Medida em Física</h1>
    <p>As unidades de medida em Física são utilizadas para quantificar propriedades físicas, como comprimento, tempo, massa, força, energia, entre outras. Elas são organizadas no <strong>Sistema Internacional de Unidades (SI)</strong>, que é o padrão mais utilizado no mundo.</p>

    <h2>Unidades Fundamentais do SI</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Grandeza</th>
                <th>Unidade</th>
                <th>Símbolo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Comprimento</td>
                <td>metro</td>
                <td>m</td>
            </tr>
            <tr>
                <td>Massa</td>
                <td>quilograma</td>
                <td>kg</td>
            </tr>
            <tr>
                <td>Tempo</td>
                <td>segundo</td>
                <td>s</td>
            </tr>
            <tr>
                <td>Corrente elétrica</td>
                <td>ampere</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Temperatura</td>
                <td>kelvin</td>
                <td>K</td>
            </tr>
            <tr>
                <td>Quantidade de substância</td>
                <td>mol</td>
                <td>mol</td>
            </tr>
            <tr>
                <td>Intensidade luminosa</td>
                <td>candela</td>
                <td>cd</td>
            </tr>
        </tbody>
    </table>

    <h2>Unidades Derivadas</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Grandeza</th>
                <th>Unidade</th>
                <th>Símbolo</th>
                <th>Expressão em unidades fundamentais</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Força</td>
                <td>newton</td>
                <td>N</td>
                <td>kg · m/s²</td>
            </tr>
            <tr>
                <td>Energia</td>
                <td>joule</td>
                <td>J</td>
                <td>kg · m²/s²</td>
            </tr>
            <tr>
                <td>Potência</td>
                <td>watt</td>
                <td>W</td>
                <td>kg · m²/s³</td>
            </tr>
            <tr>
                <td>Pressão</td>
                <td>pascal</td>
                <td>Pa</td>
                <td>N/m²</td>
            </tr>
            <tr>
                <td>Carga elétrica</td>
                <td>coulomb</td>
                <td>C</td>
                <td>A · s</td>
            </tr>
        </tbody>
    </table>

    <h2>Prefixos do SI</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Fator</th>
                <th>Prefixo</th>
                <th>Símbolo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>10¹²</td>
                <td>tera</td>
                <td>T</td>
            </tr>
            <tr>
                <td>10⁹</td>
                <td>giga</td>
                <td>G</td>
            </tr>
            <tr>
                <td>10⁶</td>
                <td>mega</td>
                <td>M</td>
            </tr>
            <tr>
                <td>10³</td>
                <td>quilo</td>
                <td>k</td>
            </tr>
            <tr>
                <td>10⁻³</td>
                <td>mili</td>
                <td>m</td>
            </tr>
            <tr>
                <td>10⁻⁶</td>
                <td>micro</td>
                <td>µ</td>
            </tr>
            <tr>
                <td>10⁻⁹</td>
                <td>nano</td>
                <td>n</td>
            </tr>
            <tr>
                <td>10⁻¹²</td>
                <td>pico</td>
                <td>p</td>
            </tr>
        </tbody>
    </table>

    <h2>Unidades Fora do SI</h2>
    <p>Algumas unidades ainda são usadas em contextos específicos, embora não façam parte do SI:</p>
    <ul>
        <li><strong>Tempo:</strong> minuto (min), hora (h), dia.</li>
        <li><strong>Distância:</strong> milha, polegada, pé.</li>
        <li><strong>Energia:</strong> caloria (cal).</li>
        <li><strong>Pressão:</strong> atmosfera (atm), milímetro de mercúrio (mmHg).</li>
    </ul>

     `
            ,
            publishedDate: new Date(),
        },

        {
            id: 2,
            title: 'Historia da Física',
            author: 'Thyago José',
            content:

                `
            <div class="historia-fisica">
  <h1>História da Física</h1>
  <p>
    A história da Física é uma fascinante jornada pelo desenvolvimento do entendimento humano sobre o universo. Ela é marcada por descobertas fundamentais e pela evolução de conceitos e métodos científicos que transformaram a nossa visão do mundo.
  </p>
  
  <h2>Antiguidade</h2>
  <ul>
    <li>
      <strong>Observações naturais:</strong> Civilizações antigas, como egípcios e babilônios, estudaram fenômenos como o movimento dos astros e marés, principalmente por razões práticas, como agricultura e navegação.
    </li>
    <li>
      <strong>Filosofia natural na Grécia:</strong>
      <ul>
        <li><strong>Tales de Mileto (624–546 a.C.):</strong> Considerado o primeiro a buscar explicações naturais para os fenômenos.</li>
        <li><strong>Aristóteles (384–322 a.C.):</strong> Propôs que o universo era composto por cinco elementos (terra, água, ar, fogo e éter).</li>
        <li><strong>Arquimedes (287–212 a.C.):</strong> Pai da mecânica clássica, estudou alavancas, flutuação e princípios de estática.</li>
      </ul>
    </li>
  </ul>
  
  <h2>Idade Média</h2>
  <p>
    A ciência foi influenciada por culturas islâmicas e medievais europeias:
  </p>
  <ul>
    <li><strong>Alhazen (965–1040):</strong> Estudou a ótica e foi pioneiro no método experimental.</li>
    <li>
      <strong>Tradutores árabes:</strong> Preservaram e ampliaram conhecimentos gregos, introduzindo conceitos matemáticos e astronômicos na Europa.
    </li>
  </ul>
  
  <h2>Renascimento e Revolução Científica (século XVI e XVII)</h2>
  <ul>
    <li><strong>Copérnico (1473–1543):</strong> Propôs o modelo heliocêntrico, desafiando a visão geocêntrica de Ptolomeu.</li>
    <li><strong>Galileu Galilei (1564–1642):</strong> Usou experimentos e telescópios para estudar o movimento e os corpos celestes.</li>
    <li><strong>Isaac Newton (1643–1727):</strong> Introduziu as Leis de Newton e a Lei da Gravitação Universal.</li>
  </ul>
  
  <h2>Séculos XVIII e XIX</h2>
  <p>
    Desenvolvimento da <strong>termodinâmica</strong>, avanços na <strong>eletricidade e magnetismo</strong> e surgimento da <strong>ótica moderna</strong>.
  </p>
  
  <h2>Século XX</h2>
  <ul>
    <li><strong>Teoria da Relatividade (Albert Einstein):</strong> Reformulou o conceito de espaço-tempo e introduziu a equação <code>E=mc²</code>.</li>
    <li><strong>Mecânica Quântica:</strong> Trouxe conceitos como dualidade onda-partícula e incerteza.</li>
    <li>Desenvolvimento da <strong>física nuclear</strong> e da <strong>física de partículas</strong>.</li>
  </ul>
  
  <h2>Século XXI</h2>
  <p>
    Exploração do <strong>cosmos</strong>, descoberta do <strong>Bóson de Higgs</strong> e busca por teorias unificadoras.
  </p>
</div>

     `
            ,

            publishedDate: new Date(),



        }
    ];
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.artigo = this.artigos.find(artigo => artigo.id === id);
    }

}
