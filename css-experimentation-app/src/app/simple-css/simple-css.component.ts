import { Component } from '@angular/core'

@Component({
    selector: 'simple-css',
    templateUrl: './simple-css.component.html',
    styleUrls: ['./simple-css.component.css']
})
export class SimpleCssComponent {
    shapes: string[] = ['box', 'circle', 'triangle', 'arrow'];
    sections: string[] = ['shapes', 'translations', 'animations'];

    constructor() { }
}