import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgUploaderModule } from 'ngx-uploader';
import { ToastModule } from 'ng2-toastr';

import { UploadComponent } from './upload.component';


@NgModule({
    declarations: [
        UploadComponent
    ],
    exports: [
        UploadComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgUploaderModule,
        ToastModule.forRoot()
    ],
    providers: [
    ]
})
export class UploadModule { }
