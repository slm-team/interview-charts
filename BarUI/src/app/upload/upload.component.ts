import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {
    @Output() uploadFinish: EventEmitter<any> = new EventEmitter();
    @Output() uploadStart: EventEmitter<any> = new EventEmitter();
    @Output() uploadError: EventEmitter<any> = new EventEmitter();
    options: UploaderOptions;
    formData: FormData;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;

    constructor() {
        this.options = {
            concurrency: 1,
            allowedContentTypes: ['text/plain']
        };
        this.files = [];
        this.uploadInput = new EventEmitter<UploadInput>();
        this.humanizeBytes = humanizeBytes;
    }

    ngOnInit() {
    }

    onUploadOutput(output: UploadOutput): void {
        if (output.type === 'allAddedToQueue') {
            this.uploadStart.emit();
            const event: UploadInput = {
                type: 'uploadAll',
                url: environment.apiUrl + 'upload',
                method: 'POST',
                data: {}
            };

            this.uploadInput.emit(event);
        }
        if (output.type === 'done') {
            if (output.file.responseStatus === 200) {
                this.uploadFinish.emit(output.file.response);
            } else {
                this.uploadError.emit(output.file.response.ExceptionMessage);
            }
        }
    }
}
