import { Component } from '@angular/core';
import { Chart, BarController } from 'chart.js/auto';

@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent {
  public barGraph: any;

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {
    this.barGraph = new Chart("barGraph", {
      type: 'bar', // This denotes the type of chart

      data: {
        labels: ['Number of Projects'],
        
        // To be used on the chart
        datasets: [{
          label: 'Service Learning',
          data: [300],
          backgroundColor: '#ff0000'
          },
          {
            label: 'Challenge-based Learning',
            data: [240],
            backgroundColor: '#ffcccc'
          },

          {
            label: 'Reach-In',
            data: [100],
            backgroundColor: [
              '#00ff00',
            ],
          },

          {
            label: 'Reach-Out',
            data: [432],
            backgroundColor: [
              '#ffff00'
            ],
          },

          {
            label: 'Co-curricular',
            data: [253],
            backgroundColor: [
              '#ffff80'
            ],
          },

          {
            label: 'Class Project',
            data: [340],
            backgroundColor: [
              '#0000ff'
            ],
          },

          {
            label: 'Research Project',
            data: [123],
            backgroundColor: [
              '#cf27f1'
            ],
          },

          {
            label: 'BS/AB Thesis',
            data: [565],
            backgroundColor: [
              '#89dd28'
            ],
          },

          {
            label: 'MS/MA Thesis',
            data: [245],
            backgroundColor: [ 
              '#0f003d'
            ],
          },

          {
            label: 'PhD Thesis',
            data: [463],
            backgroundColor: [ 
              '#ac4fd2'
            ],
          }
        ]},
      options: {
        aspectRatio: 3
      }
    });
  }
}
