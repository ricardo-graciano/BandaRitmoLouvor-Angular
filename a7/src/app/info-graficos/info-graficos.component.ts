import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { CadastrarService } from '../cadastrar.service';

@Component({
  selector: 'app-info-graficos',
  templateUrl: './info-graficos.component.html',
  styleUrls: ['./info-graficos.component.scss']
})
export class InfoGraficosComponent implements OnInit {
  //Definição dos dados iniciais dos gráficos
  pieChartData: SingleDataSet = [0, 0];
  barChartData: ChartDataSets[] = [{ data: [0], label: '' },]

  //Função que captura os cadastros, assim gerando o quantitativo de cada quesito e armazenando 
  //na várivel responsável por gravar os dados dos gráficos
  getCadastros() {
    this.listarCadastros.listarComponentes().subscribe(componentes => {
      var i = 0
      var masc = 0
      var fem = 0
      var vio = 0, fla = 0, cla = 0, alto = 0, tenor = 0;
      var tromp = 0, tromb = 0, bomb = 0
      var tec = 0, contb = 0, bat = 0;
      for (i = 0; i < componentes.length; i++) {
        if (componentes[i].sexo == "Masculino") {
          masc++
        } else {
          fem++
        }

        if (componentes[i].instrumento == "Violino") {
          vio++;
        }
        else if (componentes[i].instrumento == "Flauta") {
          fla++
        }
        else if (componentes[i].instrumento == "Clarinete") {
          cla++
        }
        else if (componentes[i].instrumento == "Sax Alto") {
          alto++
        }
        else if (componentes[i].instrumento == "Sax Tenor") {
          tenor++
        }
        else if (componentes[i].instrumento == "Trompete") {
          tromp++
        }
        else if (componentes[i].instrumento == "Trombone") {
          tromb++
        }
        else if (componentes[i].instrumento == "Bombardino") {
          bomb++
        }
        else if (componentes[i].instrumento == "Teclado") {
          tec++
        }
        else if (componentes[i].instrumento == "Contra-baixo") {
          contb++
        }
        else {
          bat++
        }

      }

      this.pieChartData = [Number(fem), Number(masc)];

      this.barChartData = [
        { data: [vio], label: 'Violino' },
        { data: [fla], label: 'Flauta' },
        { data: [cla], label: 'Clarinete' },
        { data: [alto], label: 'Sax Alto' },
        { data: [tenor], label: 'Sax Tenor' },
        { data: [tromp], label: 'Trompete' },
        { data: [tromb], label: 'Trombone' },
        { data: [bomb], label: 'Bombardino' },
        { data: [tec], label: 'Teclado' },
        { data: [contb], label: 'Contra-baixo' },
        { data: [bat], label: 'Bateria' },
      ];

    }, err => {
      alert("Erro ao capturar cadastros " + err)
    })
  }

  //Definições das propriedades do gráfico tipo pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  pieChartLabels: Label[] = [['Feminino'], ['Masculino']];

  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  constructor(private listarCadastros: CadastrarService) { }

  componentes: Array<any> = new Array()

  ngOnInit() {
    this.getCadastros()
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  //Definições das propriedades do gráfico de barras
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 1,
          reverse: false,
        },
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'center',
        align: 'center',
      }
    }
  };
  public barChartLabels: Label[] = ['Instrumentos'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
}


