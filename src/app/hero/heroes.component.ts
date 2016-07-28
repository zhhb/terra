import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Hero from './hero';
import HeroService  from './hero.service';
import HeroDetailComponent from './hero-detail.component';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    directives: [HeroDetailComponent]
})
export default class Heroescomponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero: boolean;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    addHero = () => {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close = (savedHero: Hero) => {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero = (hero: Hero, event: any) => {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }


    getHeroes = () => {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect = (hero: Hero): void => {
        this.selectedHero = hero;
    }

    gotoDetail = () => {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
