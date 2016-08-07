import { provideRouter, RouterConfig }  from '@angular/router';
import { fieldRoutes } from './fields/field.component';
//import { SystemFieldComponent } from './fields/system/sysField.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'field',
        pathMatch: 'full'
    },
    fieldRoutes
];

export const appRouterProviders = [
    provideRouter(routes)
];
