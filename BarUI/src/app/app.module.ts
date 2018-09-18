import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgUploaderModule } from 'ngx-uploader';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { BarsModule } from './bars';
import { BarChartModule } from './bar-chart';
import { UploadModule } from './upload';
import { RandomBarsModule } from './random-bars';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgUploaderModule,
        ChartsModule,
        Ng4LoadingSpinnerModule.forRoot(),
        ToastModule.forRoot(),
        BarChartModule,
        BarsModule,
        UploadModule,
        RandomBarsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
