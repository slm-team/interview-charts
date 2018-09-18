import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { BarChartComponent } from './bar-chart.component';


@NgModule({
    declarations: [
        BarChartComponent
    ],
    exports: [
        BarChartComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ChartsModule
    ],
    providers: [
    ]
})
export class BarChartModule { }
