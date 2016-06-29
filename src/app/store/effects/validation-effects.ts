import { Injectable } from '@angular/core';
import {Action, Dispatcher} from '@ngrx/store';
import {Effect, StateUpdates, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {getStringHashCode, isValidUrl} from '../../utils/';

import {
    ADD_LINK, AddLinkPayload,
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    ADD_LINK_ERROR, AddLinkErrorPayload,
} from '../app-actions';
import {AppState, Link } from '../app-types';

@Injectable()
export class ValidationEffects {

    constructor(private updates$: StateUpdates<any>) {
    }

    @Effect() validateAddLink = this.updates$.whenAction(ADD_LINK).map<AddLinkPayload>(toPayload).map(payload => {
        let link : Link = { url: payload.url, hash: getStringHashCode(payload.url).toString(), status: 'unsaved' };
        return isValidUrl(payload.url) ?
            {type: ADD_LINK_SUCCESS, payload: <AddLinkSuccessPayload> {link}} :
            {type: ADD_LINK_ERROR, payload: <AddLinkErrorPayload> {url: payload.url, error: "Url is not valid"}}
    })
}
