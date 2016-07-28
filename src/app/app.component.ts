import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../public/css/styles.less';
import HeroService from './hero/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //directives: [HeroDetailComponent],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
