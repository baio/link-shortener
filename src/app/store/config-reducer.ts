import {ActionReducer, Action} from '@ngrx/store';
import {ConfigState} from './app-types';

import {
} from './app-actions';

let defaultState : ConfigState = {
    domain: "http://tkb.co"
}

export const configReducer: ActionReducer<ConfigState> = (state: ConfigState = defaultState, action: Action) : ConfigState => {

    return state;
};

