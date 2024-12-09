import { ActivatedRoute } from '@angular/router';
import { Artigo } from './../artigos/artigo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quimica-details',
  templateUrl: './quimica-details.component.html',
  styleUrl: './quimica-details.component.css'
})
export class QuimicaDetailsComponent {
  artigo?: Artigo;

  artigos: Artigo[] = [
    {
      id: 1,
      title: 'Hidrocarbonetos',
      author: 'João Silva',
      content:
        `
      <p>
        Hidrocarbonetos são compostos químicos orgânicos formados exclusivamente por átomos de carbono (C) e hidrogênio (H).
        Eles são a base da química orgânica e podem ser encontrados em várias formas na natureza, sendo componentes principais do petróleo, gás natural e carvão.
      </p>

      <h2>Classificação dos Hidrocarbonetos</h2>
      <p>Os hidrocarbonetos são classificados com base no tipo de ligação entre os átomos de carbono e na estrutura de suas cadeias:</p>
      <ul>
        <li>
          <strong>Alcanos:</strong> Possuem apenas ligações simples entre os átomos de carbono. 
          Fórmula geral: <code>C<sub>n</sub>H<sub>2n+2</sub></code>. 
          Exemplo: Metano (<code>CH<sub>4</sub></code>), Etano (<code>C<sub>2</sub>H<sub>6</sub></code>).
        </li>
        <li>
          <strong>Alcenos:</strong> Possuem pelo menos uma ligação dupla entre átomos de carbono. 
          Fórmula geral: <code>C<sub>n</sub>H<sub>2n</sub></code>. 
          Exemplo: Eteno (<code>C<sub>2</sub>H<sub>4</sub></code>).
        </li>
        <li>
          <strong>Alcinos:</strong> Possuem pelo menos uma ligação tripla entre átomos de carbono. 
          Fórmula geral: <code>C<sub>n</sub>H<sub>2n-2</sub></code>. 
          Exemplo: Etino (<code>C<sub>2</sub>H<sub>2</sub></code>).
        </li>
        <li>
          <strong>Cicloalcanos:</strong> Hidrocarbonetos cíclicos com apenas ligações simples. 
          Fórmula geral: <code>C<sub>n</sub>H<sub>2n</sub></code>. 
          Exemplo: Ciclohexano (<code>C<sub>6</sub>H<sub>12</sub></code>).
        </li>
        <li>
          <strong>Aromáticos:</strong> Contêm anéis benzênicos ou sistemas semelhantes, com uma estrutura eletrônica estável. 
          Exemplo: Benzeno (<code>C<sub>6</sub>H<sub>6</sub></code>).
        </li>
      </ul>

      <h2>Propriedades Gerais</h2>
      <ul>
        <li><strong>Apolares:</strong> Não se dissolvem em água, mas são solúveis em solventes orgânicos.</li>
        <li><strong>Combustíveis:</strong> Muitos hidrocarbonetos, como os presentes no petróleo, são usados como combustíveis.</li>
        <li><strong>Volatilidade:</strong> Alcanos leves, como o metano, são gases; já os mais pesados, como os óleos, são líquidos ou sólidos.</li>
      </ul>

      <h2>Uso dos Hidrocarbonetos</h2>
      <p>Os hidrocarbonetos têm diversas aplicações:</p>
      <ul>
        <li><strong>Energia:</strong> Geração de energia (combustíveis fósseis, como gasolina e gás natural).</li>
        <li><strong>Indústria química:</strong> Produção de plásticos, borrachas sintéticas, solventes e outros produtos.</li>
        <li><strong>Matéria-prima:</strong> Para compostos como álcoois, ácidos e outros derivados.</li>
      </ul>
        `
      ,
      publishedDate: new Date(),
    },

    {
      id: 2,
      title: 'Engenharia de Materiais',
      author: 'João Silva',
      content:
        `
        <p>
          A Engenharia de Materiais é uma área do conhecimento que estuda, desenvolve e cria materiais, além de melhorar os processos de fabricação. 
          O objetivo é aumentar a qualidade dos produtos e ajudar os processos produtivos.
        </p>
    
        <h2>Atuação do Engenheiro de Materiais</h2>
        <p>
          O engenheiro de materiais atua em diversas indústrias, como a automobilística, têxtil, siderúrgica, biomédica, petroquímica, construção civil e meio ambiente.
        </p>
        <ul>
          <li>
            <strong>Análise e seleção de elementos:</strong> O engenheiro otimiza propriedades dos materiais.
          </li>
          <li>
            <strong>Investigação e testes:</strong> Realiza pesquisas para desenvolver novos materiais e tecnologias.
          </li>
          <li>
            <strong>Experimentos:</strong> Realiza experimentos para analisar a estrutura, composição e propriedades dos materiais.
          </li>
          <li>
            <strong>Resolução de problemas:</strong> Resolve dilemas relacionados a falhas de materiais.
          </li>
        </ul>
    
        <h2>Formação Acadêmica</h2>
        <p>
          O curso de Engenharia de Materiais é uma graduação de nível superior com titulação de bacharelado e duração média de cinco anos.
          A pós-graduação pode ser realizada em um período inferior, podendo variar de 6 meses a 2 anos.
        </p>
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
