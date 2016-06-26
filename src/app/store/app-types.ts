export type LinkStatus = 'unsaved' | 'saving' | 'removing' | 'saved' | 'removed';

export interface Link {
    hash: string;
    fullLink: string;
    shortenLink: string;
    status : LinkStatus;
}

export interface FilteredLinksList {
    filter: string;
    links: Link[];
}

export interface LinksList {
    links: Link[];
}

export interface LinksState {
    domain: string;
    validationError: string;
    list: LinksList;
    filteredList: FilteredLinksList;
}

export interface AppState {
    links: LinksState;
}