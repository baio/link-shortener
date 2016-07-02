export type LinkStatus = 'unsaved' | 'saving' |  'saved' | 'removing' |'removed' | 'error';

export interface Link {
    url: string;
    hash: string;
    status: LinkStatus;
}

export interface LinkExt extends Link {
    shortenUrl: string;
}

export interface ConfigState {
    domain: string;
}

export interface InputState {
    url: string;
    validationError: string;
}

export interface LinksState {
    links: Link[];
}

export interface FilterState {
    filter: string;
}

export interface AppState {
    config: ConfigState;
    input: InputState;
    links: LinksState;
    filter: FilterState;
}