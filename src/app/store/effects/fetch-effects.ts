import { Injectable } from '@angular/core';
import {Action, Dispatcher} from '@ngrx/store';
import {Effect, StateUpdates} from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import {FetchService} from '../../fetch.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    FETCH_LINKS, FetchLinksPayload,
    FETCH_LINKS_SUCCESS, FetchLinksSuccessPayload,
    FETCH_LINKS_ERROR, FetchLinksErrorPayload,
    ADD_LINK, AddLinkPayload,
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    ADD_LINK_ERROR, AddLinkErrorPayload,
    REMOVE_LINK, RemoveLinkPayload,
    REMOVE_LINK_SUCCESS, RemoveLinkSuccessPayload,
    REMOVE_LINK_ERROR, RemoveLinkErrorPayload
} from '../app-actions';
import {Link} from '../app-types';

@Injectable()
export class FetchEffects {

    constructor(private fetchService: FetchService, private updates$: StateUpdates<any>, private dispatcher: Dispatcher) {
    }

    @Effect() fetchLinks = this.updates$.whenAction(FETCH_LINKS).map(({action, state}) => {

        return this.fetchService.get("links")
        .map(m => ({type: FETCH_LINKS_SUCCESS, payload: <FetchLinksSuccessPayload>{ links: m }}))
        .catch(err => Observable.of({type: FETCH_LINKS_ERROR, payload: <FetchLinksErrorPayload>{ error: err }}))
    })

    @Effect() addLink = this.updates$.whenAction(ADD_LINK).map(({action, state}) => {

        let payload = <AddLinkPayload>action.payload;
        return this.fetchService.post("links", payload.url)
        .map(m => ({type: ADD_LINK_SUCCESS, payload: <AddLinkSuccessPayload>{ link: m }}))
        .catch(err => Observable.of({type: ADD_LINK_ERROR, payload: <AddLinkErrorPayload>{ url: payload.url, error: err }}))
    })

    @Effect() removeLink = this.updates$.whenAction(REMOVE_LINK).map(({action, state}) => {

        let payload = <RemoveLinkPayload>action.payload;
        return this.fetchService.remove("links/" + payload.hash)
        .map(m => ({type: REMOVE_LINK_SUCCESS, payload: <RemoveLinkSuccessPayload>{ hash: payload.hash }}))
        .catch(err => Observable.of({type: REMOVE_LINK_ERROR, payload: <RemoveLinkErrorPayload>{ hash: payload.hash, error: err }}))
    })


}