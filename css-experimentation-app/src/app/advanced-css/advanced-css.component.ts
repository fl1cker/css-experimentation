import { Component } from '@angular/core'

@Component ({
    selector: 'advanced-css',
    templateUrl: './advanced-css.component.html',
    styleUrls: ['./advanced-css.component.css']
})
export class AdvancedCssComponent {
    rowNumber = 13;
    columnNumber = 15;
    array = Array;
    constructor() { }
}