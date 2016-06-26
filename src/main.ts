import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_STORE_PROVIDERS } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_STORE_PROVIDERS
]);

