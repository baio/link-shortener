import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lsq-links-list-filter',
  templateUrl: 'links-list-filter.component.html',
  styleUrls: ['links-list-filter.component.css']
})
export class LinksListFilterComponent  {

  @Input() filter: string;
  @Output() changed = new EventEmitter<string>();

  onChanged(filter: string): void {

    this.changed.emit(filter);
  }

}
