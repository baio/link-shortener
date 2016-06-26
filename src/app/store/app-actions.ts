import { Link, LinkStatus } from './app-types';

export const SET_DOMAIN = "SET_DOMAIN";

export interface SetDomainPayload {
    domain: string;
}

export const ADD_LINK = "ADD_LINK";

export interface AddLinkPayload {
    url: string;
}

export const REMOVE_LINK = "REMOVE_LINK";

export interface RemoveLinkPayload {
    hash: string;
}

export const LINKS_FETCHED = "LINKS_FETCHED";

export interface LinksFetchedPayload {
    links: Link[]
}

export const FILTER_LINKS = "FILTER_LINKS";

export interface FilterLinksPayload {
    filter: string;
}

export const UPDATE_LINK_STATUS = "UPDATE_LINK_STATE";

export interface UpdateLinkStatusPayload {
    hash: string;
    status: LinkStatus
}