import {provideStore, combineReducers} from "@ngrx/store";

import { linksReducer } from "./links-reducer";

export const appStore: any[] =  provideStore({
    links: linksReducer
});

export const APP_STORE_PROVIDERS: any[][] = [
    appStore
];