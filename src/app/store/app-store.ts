import {compose} from '@ngrx/core/compose';
import {runEffects} from '@ngrx/effects';
import {provideStore, combineReducers} from "@ngrx/store";
import {storeLogger} from 'ngrx-store-logger';

import { configReducer } from "./config-reducer";
import { inputReducer } from "./input-reducer";
import { linksReducer } from "./links-reducer";
import { FetchEffects } from "../store/effects/fetch-effects";
import { ValidationEffects } from "../store/effects/validation-effects";

export const appStore: any[] = provideStore(
    compose(
        storeLogger(),
        combineReducers
    )({
        links: linksReducer,
        config: configReducer,
        input: inputReducer
    })
);

export const APP_STORE_PROVIDERS: any[][] = [
    appStore,
    runEffects(FetchEffects, ValidationEffects)
];