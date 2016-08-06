import { Directive, HostListener} from '@angular/core';

@Directive({ selector: '[noBubble]' })
export class noBubble {
    @HostListener('click', ['$event'])
    onClick = (e: Event = window.event) => {
        e.stopPropagation();
    }
}
