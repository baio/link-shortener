import {ActionReducer, Action} from '@ngrx/store';
import {InputState} from './app-types';

import {
    ADD_LINK, AddLinkPayload,
    ADD_LINK_SUCCESS, AddLinkSuccessPayload,
    ADD_LINK_ERROR, AddLinkErrorPayload
} from './app-actions';

let defaultState : InputState = {
    url: "",
    validationError: ""
}

export const inputReducer: ActionReducer<InputState> = (state: InputState = defaultState, action: Action) : InputState => {

    switch (action.type) {
        case ADD_LINK: {
            let payload = <AddLinkPayload> action.payload;
            return {url: payload.url, validationError: ""}
        }
        case ADD_LINK_SUCCESS:
            return {url: "", validationError: ""}
        case ADD_LINK_ERROR: {
            let payload = <AddLinkErrorPayload> action.payload;
            return {url: payload.url, validationError: payload.error};
        }
    }
    return state;
};

