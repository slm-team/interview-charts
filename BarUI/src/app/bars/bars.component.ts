import { Component, EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { BarChartComponent } from '../bar-chart';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastsManager } from 'ng2-toastr';

import { Bar } from './bars.model';
import { BarsService } from './bars.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bars',
    templateUrl: './bars.component.html',
    styleUrls: ['./bars.component.css']
})

export class BarsComponent implements OnInit {
    barData = new EventEmitter<Array<Bar>>();
    subscription: Subscription;

    constructor(public barsService: BarsService,
        public spinner: Ng4LoadingSpinnerService,
        public toastr: ToastsManager,
        public vRef: ViewContainerRef,
        public router: Router) {
        this.toastr.setRootViewContainerRef(vRef);
    }

    ngOnInit() {
        this.barsService.getStaticBars().subscribe(result => {
            this.barData.emit(result);
        });
    }

    onUpload(data: Array<Bar>) {
    }

    uploadStart() {
    }

    uploadError(message: string) {
    }

    goToRandom() {
    }
}
