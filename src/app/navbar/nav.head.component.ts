import {
    Component,
    OnInit,
    Input,
    HostListener,
    ElementRef
} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { noBubble } from '../directives/common.directive';

@Component({
    selector: 'nav-head',
    templateUrl: './nav.head.component.html',
    styleUrls: ['./nav.head.component.css'],
    directives: [CORE_DIRECTIVES, noBubble]
})
export class NavHeadComponent {
    isAcountDropDown: boolean = false;


    constructor(private _eref: ElementRef) { }

    @HostListener('document:click', ['$event'])
    onAcountBlur = (e: Event = window.event) => {
        this.isAcountDropDown = false;
    }

    onToggle = (e: Event = window.event) => {
        this.isAcountDropDown = !this.isAcountDropDown;
    }
}
