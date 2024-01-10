import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AddressFormComponent } from "../address-form/address-form.component";
import { DragDropComponent } from "../drag-drop/drag-drop.component";
@Component({
    selector: 'app-playground',
    standalone: true,
    templateUrl: './playground.component.html',
    styleUrl: './playground.component.scss',
    imports: [ButtonsComponent, DashboardComponent, AddressFormComponent, DragDropComponent]
})
export class PlaygroundComponent {

}
