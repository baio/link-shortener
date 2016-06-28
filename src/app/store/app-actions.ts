import { Link, LinkStatus } from './app-types';

export const SET_DOMAIN = "SET_DOMAIN";

export interface SetDomainPayload {
    domain: string;
}

export const ADD_LINK = "ADD_LINK";

export interface AddLinkPayload {
    url: string;
}

//Handle update state changes
export const UPDATE_LINK = "SAVE_LINK_UPDATE";

export interface UpdateLinkPayload {
    link: Link,
    status: 'start' | 'success' | 'error',
    error?: string // only if status 'error'
}

export const FETCH_LINKS = "FETCH_LINKS";

export interface FetchLinksPayload {
}

export const FETCH_LINKS_SUCCESS = "FETCH_LINKS_SUCCESS";

export interface FetchLinksSuccessPayload {
    links: Link[]
}

export const FETCH_LINKS_ERROR = "FETCH_LINKS_ERROR";

export interface FetchLinksErrorPayload {
    error: string
}

export const FILTER_LINKS = "FILTER_LINKS";

export interface FilterLinksPayload {
    filter: string;
}
