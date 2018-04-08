import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    form = new FormGroup({
        selectedPage: new FormControl('advanced-css')
    })
}