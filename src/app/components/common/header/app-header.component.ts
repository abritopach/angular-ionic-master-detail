import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
})

export class AppHeaderComponent {
    @Input() title: string;
}
