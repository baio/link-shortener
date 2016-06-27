import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment, APP_STORE_PROVIDERS, FetchService } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_STORE_PROVIDERS,
  HTTP_PROVIDERS,
  FetchService
]);

