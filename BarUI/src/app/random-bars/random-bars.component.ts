import { Component, EventEmitter, OnInit } from '@angular/core';
import { BarChartComponent } from '../bar-chart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

import { Bar } from '../bars';
import { RandomBarsService } from './random-bars.service';

@Component({
    selector: 'app-random-bars',
    templateUrl: './random-bars.component.html'
})

export class RandomBarsComponent implements OnInit {
    barData = new EventEmitter<Array<Bar>>();
    subscription: Subscription;

    constructor(public randomBarsService: RandomBarsService) {
    }

    ngOnInit() {
        this.generateRandomBars();
        this.subscription = Observable.interval(5000)
            .subscribe((val) => {
                this.generateRandomBars();
            });
    }

    generateRandomBars() {
        this.randomBarsService.getRandomBars().subscribe(result => {
            this.barData.emit(result);
        });
    }
}
