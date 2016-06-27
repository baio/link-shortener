import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, LinksState,
  Link,
  REMOVE_LINK, RemoveLinkPayload
} from '../store/';

@Component({
  moduleId: module.id,
  selector: 'lsq-links-list',
  templateUrl: 'links-list.component.html',
  styleUrls: ['links-list.component.css']
})
export class LinksListComponent  {

  state$: Observable<LinksState>;

  constructor(private store$: Store<AppState>) {
    this.state$ = store$.select(p => p.links);
  }

  onLinkRemove(link: Link): void {
    this.store$.dispatch({type: REMOVE_LINK, payload: <RemoveLinkPayload>{hash: link.hash}});
  }

}
