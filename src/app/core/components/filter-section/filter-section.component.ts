import { Component } from '@angular/core';

@Component({
  selector: 'filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {
  onClick() {
    alert("Filter Out Some Stuff");
  }
}
