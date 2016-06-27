import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, LinksState } from '../store/';

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

}
