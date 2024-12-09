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
        }
    ];
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.artigo = this.artigos.find(artigo => artigo.id === id);
    }

}
