import { Component } from '@angular/core';

@Component({
  selector: 'engagement-views',
  templateUrl: './engagement-views.component.html',
  styleUrls: ['./engagement-views.component.css'],
})
export class EngagementViewsComponent {
  viewNum = 1;
  pieGraph = true;

  changeView(value: any) {
    this.viewNum = value;
    this.pieGraph = false;
  }

  changeGraph() {
    this.pieGraph = !this.pieGraph;
  }
}
