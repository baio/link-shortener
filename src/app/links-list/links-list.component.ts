import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LinksListFilterComponent } from '../links-list-filter';

import { AppState, LinksState,
  LinkExt, Link,
  REMOVE_LINK, RemoveLinkPayload
} from '../store/';

@Component({
  moduleId: module.id,
  selector: 'lsq-links-list',
  templateUrl: 'links-list.component.html',
  styleUrls: ['links-list.component.css'],
  directives: [ LinksListFilterComponent ]
})
export class LinksListComponent  {

  @Input() filter: string;
  @Input() links: LinkExt[];
  @Output() removeLink = new EventEmitter<Link>();
  @Output() filterLinks = new EventEmitter<string>();

  onLinkRemove(link: Link): void {
    this.removeLink.emit(link);
  }

  onFilterChanged(filter: string): void {
    this.filterLinks.emit(filter);
  }

}
