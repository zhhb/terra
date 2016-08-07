import {
    Component,
    OnInit,
    Input,
    HostListener,
} from '@angular/core';

import { noBubble } from '../directives/common.directive';

@Component({
    selector: 'nav-head',
    templateUrl: './nav.head.component.html',
    styleUrls: ['./nav.head.component.css'],
    directives: [noBubble]
})
export class NavHeadComponent {
    isAcountDropDown: boolean = false;

    constructor() { }

    @HostListener('document:click', ['$event'])
    onAcountBlur = (e: Event = window.event) => {
        this.isAcountDropDown = false;
    }

    onToggle = (e: Event = window.event) => {
        this.isAcountDropDown = !this.isAcountDropDown;
    }
}
