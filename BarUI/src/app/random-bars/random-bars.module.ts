import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RandomBarsComponent } from './random-bars.component';
import { RandomBarsService } from './random-bars.service';
import { BarChartModule } from '../bar-chart';


@NgModule({
    declarations: [
        RandomBarsComponent
    ],
    exports: [
        RandomBarsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BarChartModule
    ],
    providers: [
        RandomBarsService
    ]
})
export class RandomBarsModule { }
