// The usual bootstrapping imports
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    //appRouterProviders,
    HTTP_PROVIDERS,
]);
