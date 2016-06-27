import {ActionReducer, Action} from '@ngrx/store';
import {LinksState, LinksList,  FilteredLinksList, Link} from './app-types';
import {getStringHashCode, isValidUrl} from '../utils/';
import {
    SET_DOMAIN, SetDomainPayload,
    ADD_LINK, AddLinkPayload,
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    ADD_LINK_ERROR, AddLinkErrorPayload,
    REMOVE_LINK, RemoveLinkPayload,
    REMOVE_LINK_SUCCESS, RemoveLinkSuccessPayload,
    REMOVE_LINK_ERROR, RemoveLinkErrorPayload,
    FETCH_LINKS, FetchLinksPayload,
    FETCH_LINKS_SUCCESS, FetchLinksSuccessPayload,
    FETCH_LINKS_ERROR, FetchLinksErrorPayload,
    FILTER_LINKS, FilterLinksPayload,
    UPDATE_LINK_STATUS, UpdateLinkStatusPayload
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
        status: "saving"
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
        case ADD_LINK_SUCCESS: {
            let payload : AddLinkSuccessPayload = action.payload;
            let links = state.list.links.map(p =>
                p.fullLink === payload.link.fullLink ? Object.assign({}, p, { status : 'saved'}) : p);
            return clone({
                list : { links },
                filteredList : reduceFilteredList(state.filteredList.filter, links)
            });
        }
        case ADD_LINK_ERROR: {
            let payload : AddLinkErrorPayload = action.payload;
            let links = state.list.links.map(p =>
                p.fullLink === payload.url ? Object.assign({}, p, { status : 'error'}) : p);
            return clone({
                list : { links },
                filteredList : reduceFilteredList(state.filteredList.filter, links)
            });
        }
        case REMOVE_LINK: {
            let payload : RemoveLinkPayload = action.payload;
            let links = state.list.links.map(p =>
                p.hash === payload.hash ? Object.assign({}, p, { status : "removing"}) : p);
            return clone({
                list : { links },
                filteredList : reduceFilteredList(state.filteredList.filter, links)
            });
        }
        case REMOVE_LINK_SUCCESS: {
            let payload : RemoveLinkSuccessPayload = action.payload;
            let links = state.list.links.filter(p => p.hash !== payload.hash);
            return clone({
                list : { links },
                filteredList : reduceFilteredList(state.filteredList.filter, links)
            });
        }
        case REMOVE_LINK_ERROR: {
            let payload : RemoveLinkErrorPayload = action.payload;
            let links = state.list.links.map(p =>
                p.hash === payload.hash ? Object.assign({}, p, { status : "error"}) : p);
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
        case UPDATE_LINK_STATUS: {
            let payload : UpdateLinkStatusPayload = action.payload;
            let links = state.list.links;
            if (payload.status === "removed") {
                links = links.filter(p => p.hash !== payload.hash);
            } else {
                links = state.list.links.map(p =>
                    p.hash === payload.hash ? Object.assign({}, { status : payload.status}) : p);
            }
            return clone({
                list : { links : links},
                filteredList : reduceFilteredList(state.filteredList.filter, links)
            });
        }
        default:
            return state;
    }
};

