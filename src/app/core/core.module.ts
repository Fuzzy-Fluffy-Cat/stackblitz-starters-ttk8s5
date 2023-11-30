import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSelectorComponent } from './components/view-selector/view-selector.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { EngagementViewsComponent } from './components/engagement-views/engagement-views.component';
import { PieChartComponent } from './components/graph-views/pie-chart/pie-chart.component';
import { BarGraphComponent } from './components/graph-views/bar-graph/bar-graph.component';
import { StackedBarGraphComponent } from './components/graph-views/stacked-bar-graph/stacked-bar-graph.component';
import { RadarChartComponent } from './components/graph-views/radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    ViewSelectorComponent,
    FilterSectionComponent,
    EngagementViewsComponent,
    PieChartComponent,
    BarGraphComponent,
    StackedBarGraphComponent,
    RadarChartComponent,
  ],
  imports: [CommonModule],
  exports: [EngagementViewsComponent],
})
export class CoreModule {}
