import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BarChartModule } from '../bar-chart';

import { BarsComponent } from './bars.component';
import { BarsService } from './bars.service';
import { UploadModule } from '../upload';

@NgModule({
    declarations: [
        BarsComponent
    ],
    exports: [
        BarsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        UploadModule,
        BarChartModule
    ],
    providers: [
        BarsService
    ]
})
export class BarsModule { }
