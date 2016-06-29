import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import  { LinksListComponent } from '../links-list';
import  { AddNewLinkComponent } from '../add-new-link';

import {
  getExtLinks,
  AppState, InputState, LinkExt, Link,
  ADD_LINK, AddLinkPayload,
  REMOVE_LINK, RemoveLinkPayload
} from '../store';

@Component({
  moduleId: module.id,
  selector: 'lsq-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.css'],
  directives: [AddNewLinkComponent, LinksListComponent]
})
export class MainPageComponent  {

  input$: Observable<InputState>;
  links$: Observable<LinkExt[]>;

  constructor(private state$: Store<AppState>) {

    this.input$ = state$.select(p => p.input);
    this.links$ = state$.let(getExtLinks());
  }

  onAddLink(url: string) {
    this.state$.dispatch({type: ADD_LINK, payload: <AddLinkPayload>{url}});
  }

  onRemoveLink(link: Link) {
    this.state$.dispatch({type: REMOVE_LINK, payload: <RemoveLinkPayload>{link}});
  }

  onFilterLinks(filter: string) {
  }

}
