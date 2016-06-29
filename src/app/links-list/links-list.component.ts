import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, LinksState,
  LinkExt, Link,
  REMOVE_LINK, RemoveLinkPayload
} from '../store/';

@Component({
  moduleId: module.id,
  selector: 'lsq-links-list',
  templateUrl: 'links-list.component.html',
  styleUrls: ['links-list.component.css']
})
export class LinksListComponent  {

  @Input() links: LinkExt[];
  @Output() removeLink = new EventEmitter<Link>();
  @Output() filterLinks = new EventEmitter<string>();

  onLinkRemove(link: Link): void {
    this.removeLink.emit(link);
  }

}
