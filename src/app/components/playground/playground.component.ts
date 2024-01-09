import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
@Component({
    selector: 'app-playground',
    standalone: true,
    templateUrl: './playground.component.html',
    styleUrl: './playground.component.scss',
    imports: [ButtonsComponent, DashboardComponent]
})
export class PlaygroundComponent {

}
