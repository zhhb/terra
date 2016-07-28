import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../public/css/styles.less';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {
}
