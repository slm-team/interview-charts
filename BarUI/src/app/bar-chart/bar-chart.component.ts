import { Component, Input, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

import { Bar } from '../bars';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html'
})

export class BarChartComponent implements OnInit {
    @Input() data: EventEmitter<Array<Bar>>;
    @ViewChild(BaseChartDirective) chart: BaseChartDirective;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    public barChartType = 'bar';
    public barChartLegend = false;

    public barChartLabels: string[] = [];
    public barChartData: any[] = [{ data: [] }];
    public barChartColors: any[] = [{
        backgroundColor: []
    }];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    ngOnInit() {
        this.data.subscribe(bars => {
            const tempLabelsArray = [];
            const tempValueArray = [];
            const tempColorArray = [];

            bars.forEach(element => {
                tempLabelsArray.push(element.name);
                tempValueArray.push(element.value);
                tempColorArray.push(element.color);
            });

            this.barChartColors = [{
                backgroundColor: tempColorArray
            }];
            this.barChartLabels = tempLabelsArray;
            this.barChartData = [
                { data: tempValueArray, backgroundColor: tempColorArray }
            ];

            this.refresh_chart();
        });
    }

    refresh_chart() {
        setTimeout(() => {
            if (this.chart && this.chart.chart && this.chart.chart.config) {
                this.chart.chart.config.data.labels = this.barChartLabels;
                this.chart.chart.config.data.datasets = this.barChartData;
                this.chart.chart.update();
            }
        });
    }
}
