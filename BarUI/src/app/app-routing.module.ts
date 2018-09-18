import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarsComponent } from './bars';
import { AppComponent } from './app.component';
import { RandomBarsComponent } from './random-bars';

const routes: Routes = [
    {
        path: '',
        component: BarsComponent
    },
    {
        path: 'random',
        component: RandomBarsComponent
    },
    { path: '**', component: BarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
