import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Route, provideRouter} from '@angular/router';
import { SystemFieldComponent } from './system/sysField.component';
import { CustomFieldComponent } from './custom/extField.component';

export const fieldRoutes: Route = {
    path: 'field',
    component: FieldComponent,
    children: [
        {
            path: '',
            redirectTo: 'sys',
        },
        {
            path: 'sys',
            component: SystemFieldComponent
        },
        {
            path: 'ext',
            component: CustomFieldComponent
        }
    ]
};

@Component({
    selector: 'field',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
})
export class FieldComponent {
    constructor() { }
}



