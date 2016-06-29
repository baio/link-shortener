import {ActionReducer, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState, LinksState, Link, LinkStatus, LinkExt} from './app-types';
import {
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    UPDATE_LINK, UpdateLinkPayload,
    FETCH_LINKS_SUCCESS, FetchLinksSuccessPayload
} from './app-actions';

let defaultState : LinksState = {
    links : []
}

export const linksReducer: ActionReducer<LinksState> = (state: LinksState = defaultState, action: Action) : LinksState => {

    switch (action.type) {
        case FETCH_LINKS_SUCCESS: {
            return { links : action.payload };
        }
        case ADD_LINK_SUCCESS: {
            let payload = <AddLinkSuccessPayload> action.payload;
            return { links : [
                payload.link,
                ...state.links]
            };
        }
        case UPDATE_LINK: {
            let payload = <UpdateLinkPayload> action.payload;
            return { links :
                state.links.map(m => m.hash === payload.link.hash ? Object.assign({}, m, {status: payload.status}) : m)
            };
        }
        default:
            return state;
    }
};

export function getExtLinks()  {
  return (state$: Observable<AppState>) : Observable<LinkExt[]> =>
    state$.map(m =>
        m.links.links.map(l => Object.assign({}, l, { shortenUrl : `${m.config.domain}/${l.hash}` }))
    )
};