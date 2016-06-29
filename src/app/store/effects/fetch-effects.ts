import { Injectable } from '@angular/core';
import {Action, Dispatcher} from '@ngrx/store';
import {Effect, StateUpdates, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import {FetchService} from '../../fetch.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    FETCH_LINKS, FetchLinksPayload,
    FETCH_LINKS_SUCCESS, FetchLinksSuccessPayload,
    FETCH_LINKS_ERROR, FetchLinksErrorPayload,
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    UPDATE_LINK, UpdateLinkPayload
} from '../app-actions';
import {AppState, Link } from '../app-types';

@Injectable()
export class FetchEffects {

    constructor(private fetchService: FetchService, private updates$: StateUpdates<any>, private dispatcher: Dispatcher) {
    }

    @Effect() fetchLinks = this.updates$.whenAction(FETCH_LINKS).switchMap(({action, state}) =>
        this.fetchService.get("links")
        .map(m => ({type: FETCH_LINKS_SUCCESS, payload: <FetchLinksSuccessPayload>{ links: m }}))
        .catch(err => Observable.of({type: FETCH_LINKS_ERROR, payload: <FetchLinksErrorPayload>{ error: err }}))
    )

    @Effect() addLink = this.updates$.whenAction(ADD_LINK_SUCCESS).map<AddLinkSuccessPayload>(toPayload).map(p => p.link)
        .switchMap(link =>

            Observable.concat(
                Observable.of({type: UPDATE_LINK, payload: <UpdateLinkPayload>{ link, status : 'saving' }}),

                this.fetchService.post("links", { url : link, hash : link.hash })
                .map(m => ({type: UPDATE_LINK, payload: <UpdateLinkPayload>{ link, status: 'saved' }}))
                .catch(err =>
                    Observable.of({type: UPDATE_LINK, payload: <UpdateLinkPayload>{ link, status: 'error', error: err }})
                )
            )
        )

}
