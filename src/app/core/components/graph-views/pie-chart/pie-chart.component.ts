import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Input } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  // @Input() graph
  public pieChart: any;
  dt = [];
  lb = [];

  // Marginalized Sectors Count
  poorCt = 0;
  urbanPoorCt = 0;
  womenCt = 0;
  childrenCt = 0;
  indigCt = 0;
  lgbtCt = 0;
  pwdCt = 0;
  mentalCt = 0;
  seniorCt = 0;
  brokenFamCt = 0;
  orphanCt = 0;
  outOfSchoolCt = 0;
  rehabCt = 0;
  refugeCt = 0;
  otherMargCt = 0;

  // Curricular Elements Distribution
  cblCt = 0;
  servLeaCt = 0;
  reachInCt = 0;
  reachOutCt = 0;
  coCurriCt = 0;
  classPrCt = 0;
  resPrCt = 0;
  bsThCt = 0;
  maThCt = 0;
  phdThCt = 0;

  // Member Type Distribution
  grdSchCt = 0;
  highSchCt = 0;
  collCt = 0;
  researCt = 0;
  suppStCt = 0;
  teaProfCt = 0;
  brosCr = 0;

  // Engagement Type Distribution
  //  cblCt = 0
  //  servLeaCt = 0
  //  reachInCt = 0
  //  reachOutCt = 0
  //  coCurriCt = 0
  //  classPrCt = 0
  //  resPrCt = 0
  //  bsThCt = 0
  //  maThCt = 0
  //  phdThCt = 0
  // Revise this part later on

  csvPath = '../../../data/levadura.csv';

  ngOnInit(): void {
    // Parse local CSV file with PapaParse
    // Papa.parse(this.csvPath, {
    //   header: true,
    //   dynamicTyping: true,
    //   complete: function (results: any) {
    //     console.log('Parsed Results:', results.data);
    //   },
    // });

    // results.data.forEach(row,

    this.createChart();
  }

  createChart() {
    // if (viewNum == 1) {

    // }
    // else if (viewNum == 2) {

    // }
    // else if (viewNum == 3) {

    // }
    // else if

    this.pieChart = new Chart('pieChart', {
      type: 'pie', // This denotes the type of chart

      data: {
        // values on X-Axis
        labels: [
          'Poor',
          'Urban Poor',
          'Women',
          'Children',
          'Indigenous People',
          'LGBTQIA+',
          'PWD',
          'Mentally Ill',
          'Senior Citizen',
          'Broken Family',
          'Orphans',
          'Out-of-School Youth',
          'Rehabilitees',
          'Refugees',
          'Others',
        ],

        // To be used on the chart
        datasets: [
          {
            label: 'Number of Project', // Slice Description when hovered
            data: [
              300, 240, 100, 432, 253, 34, 123, 565, 245, 463, 256, 653, 125,
              564, 523,
            ], // number to be divided into slices
            backgroundColor: [
              '#ff0000',
              '#ffcccc',
              '#00ff00',
              '#ffff00',
              '#ffff80',
              '#0000ff',
              '#cf27f1',
              '#89dd28',
              '#0f003d',
              '#ac4fd2',
              '#259011',
              '#896fab',
              '#f0c8c7',
              '#5bbbcd',
              '#ffbbcd',
            ], // Colors to correspons with the data
            hoverOffset: 30, // Distance of the slice from chart center when hovered
          },
        ],
      },
      options: {
        aspectRatio: 3,
      },
    });
  }
}
