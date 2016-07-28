import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import Hero from '../hero/hero';
import HeroService from '../hero/hero.service';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail = (hero: Hero) => {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
