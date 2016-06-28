import {ActionReducer, Action} from '@ngrx/store';
import {LinksState, LinksList,  FilteredLinksList, Link} from './app-types';
import {getStringHashCode, isValidUrl} from '../utils/';
import {
    SET_DOMAIN, SetDomainPayload,
    ADD_LINK, AddLinkPayload,
    UPDATE_LINK, UpdateLinkPayload,
    FETCH_LINKS, FetchLinksPayload,
    FETCH_LINKS_SUCCESS, FetchLinksSuccessPayload,
    FETCH_LINKS_ERROR, FetchLinksErrorPayload,
    FILTER_LINKS, FilterLinksPayload,
} from './app-actions';

let defaultState : LinksState = {
    url: "",
    domain: "http://tkf.co",
    validationError: null,
    list: { links : [] },
    filteredList: { links : [], filter : "" }
}

const reduceFilteredList = (filter: string, links: Link[]) : FilteredLinksList => (
    {
        filter,
        links: filter ? links.filter(f => f.fullLink.toLowerCase().startsWith(filter.toLowerCase())) : links
    }
)

const reduceUrl = (url: string, domain: string) : Link => {
    var hash = getStringHashCode(url).toString();
    return {
        hash,
        fullLink: url,
        shortenLink: domain + "/" +hash,
        status: "unsaved"
    }
}

const reduceLinks = (links: Link[], payload: UpdateLinkPayload) : Link[] => {
    if (payload.status === 'success' && payload.link.status === 'removing') {
        return links.filter(f => f.hash !== payload.link.hash);
    } else {
        return links.map(m => m.hash !== payload.link.hash ? m : Object.assign({}, m, {status : payload.status}));
    }
}

export const linksReducer: ActionReducer<LinksState> = (state: LinksState = defaultState, action: Action) => {

    const clone = (ext : Object) : LinksState =>
        Object.assign({}, state, {validationError : null}, ext)

    switch (action.type) {
        case SET_DOMAIN: {
            let payload : SetDomainPayload = action.payload;
            return clone({domain : payload.domain});
        }
        case ADD_LINK: {
            let payload : AddLinkPayload = action.payload;
            let url = payload.url;
            if (isValidUrl(url)) {
                let links = [reduceUrl(url, state.domain), ...state.list.links];
                return clone({
                    url: "",
                    list : { links },
                    filteredList : reduceFilteredList(state.filteredList.filter, links)
                });
            } else {
                return clone({
                    url: url,
                    validationError : "String is not url."
                });
            }
        }
        case UPDATE_LINK: {
            let payload : UpdateLinkPayload = action.payload;
            let links = reduceLinks(state.list.links, payload);
            return clone({
                list : { links },
                filteredList : reduceFilteredList(state.filteredList.filter, links)
            });
        }
        case FETCH_LINKS_SUCCESS: {
            let payload : FetchLinksSuccessPayload = action.payload;
            return clone({
                list : { links : payload.links},
                filteredList : reduceFilteredList(state.filteredList.filter, payload.links)
            });
        }
        case FILTER_LINKS: {
            let payload : FilterLinksPayload = action.payload;
            return clone({
                filteredList : reduceFilteredList(payload.filter, state.list.links)
            });
        }
        default:
            return state;
    }
};

