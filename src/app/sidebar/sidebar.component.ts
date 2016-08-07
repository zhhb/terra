import {
    Component,
    OnInit,
    Input,
    HostListener,
} from '@angular/core';

import { noBubble } from '../directives/common.directive';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    directives: [noBubble, CORE_DIRECTIVES, FORM_DIRECTIVES, TOOLTIP_DIRECTIVES]
})
export class SideBarComponent {

    constructor() { }
}

