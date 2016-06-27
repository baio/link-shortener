import {compose} from '@ngrx/core/compose';
import {runEffects} from '@ngrx/effects';
import {provideStore, combineReducers} from "@ngrx/store";
import {storeLogger} from 'ngrx-store-logger';

import { linksReducer } from "./links-reducer";
import { FetchEffects } from "../store/effects/fetch-effects";

export const appStore: any[] = provideStore(
    compose(
        storeLogger(),
        combineReducers
    )({
        links: linksReducer
    })
);

export const APP_STORE_PROVIDERS: any[][] = [
    appStore,
    runEffects(FetchEffects)
];