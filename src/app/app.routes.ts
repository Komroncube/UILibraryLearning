import { Routes } from '@angular/router';
import { PlaygroundComponent } from './components/playground/playground.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'playground', component: PlaygroundComponent},
];
