import { Link, LinkStatus } from './app-types';

export const SET_DOMAIN = "SET_DOMAIN";

export interface SetDomainPayload {
    domain: string;
}

export const REMOVE_LINK = "REMOVE_LINK";

export interface RemoveLinkPayload {
    link: Link;
}

export const ADD_LINK = "ADD_LINK";

export interface AddLinkPayload {
    url: string;
}

export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";

export interface AddLinkSuccessPayload {
    link: Link
}

export const ADD_LINK_ERROR = "ADD_LINK_ERROR";

export interface AddLinkErrorPayload {
    url: string;
    error: string;
}

export const UPDATE_LINK = "UPDATE_LINK";

export interface UpdateLinkPayload {
    link: Link,
    status: LinkStatus,
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
