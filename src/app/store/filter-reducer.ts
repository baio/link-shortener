import {ActionReducer, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState, FilterState} from './app-types';

import {
    FILTER_LINKS, FilterLinksPayload
} from './app-actions';

let defaultState : FilterState = {
    filter: ""
}

export const filterReducer: ActionReducer<FilterState> = (state: FilterState = defaultState, action: Action) : FilterState => {

    switch (action.type) {
        case FILTER_LINKS: {
            let payload = <FilterLinksPayload> action.payload;
            return { filter: payload.filter }
        }
    }

    return state;
};

export function getFilter() {
  return (state$: Observable<AppState>) : Observable<string> =>
    state$.map(m => m.filter.filter);
};
