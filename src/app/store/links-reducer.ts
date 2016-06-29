import {ActionReducer, Action} from '@ngrx/store';
import {LinksState, Link, LinkStatus} from './app-types';
import {getStringHashCode, isValidUrl} from '../utils/';
import {
    UpdateLinkStatus,
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    UPDATE_LINK, UpdateLinkPayload,
    FETCH_LINKS_SUCCESS, FetchLinksSuccessPayload
} from './app-actions';

let defaultState : LinksState = {
    links : []
}

const mapUpdateStatus = (updateStatus: UpdateLinkStatus) : LinkStatus => {
    switch(updateStatus) {
        case 'start':
            return 'saving';
        case 'success':
            return 'saved';
        case 'error':
            return 'error';
    }
}

export const linksReducer: ActionReducer<LinksState> = (state: LinksState = defaultState, action: Action) : LinksState => {

    switch (action.type) {
        case FETCH_LINKS_SUCCESS: {
            return { links : action.payload };
        }
        case ADD_LINK_SUCCESS: {
            let payload = <AddLinkSuccessPayload> action.payload;
            return { links : [
                { url: payload.url, hash: getStringHashCode(payload.url).toString(), status: 'unsaved' },
                ...state.links]
            };
        }
        case UPDATE_LINK: {
            let payload = <UpdateLinkPayload> action.payload;
            return { links :
                state.links.map(m => m.hash === payload.link.hash ? Object.assign({}, m, {status: mapUpdateStatus(payload.status)}) : m)
            };
        }
        default:
            return state;
    }
};

