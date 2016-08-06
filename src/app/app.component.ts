import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../public/less/styles.less';

import { NavHeadComponent } from './navbar/nav.head.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [
        NavHeadComponent,
        ROUTER_DIRECTIVES
    ],
})
export class AppComponent {
}
