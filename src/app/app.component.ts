import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

import { AddNewLinkComponent } from './add-new-link';
import { LinksListComponent } from './links-list';

import { AppState, LinksState,
  ADD_LINK, AddLinkPayload
} from './store/';

@Component({
  moduleId: module.id,
  selector: 'lsq-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LinksListComponent, AddNewLinkComponent]
})
export class AppComponent {

  state$: Observable<LinksState>;

  constructor(private store$: Store<AppState>) {
    this.state$ = store$.select(p => p.links);
  }

  onAddLink(url: string): void {
    this.store$.dispatch({ type : ADD_LINK, payload : <AddLinkPayload> { url }});
  }

}
