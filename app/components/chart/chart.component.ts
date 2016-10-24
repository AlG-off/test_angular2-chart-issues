import {Component, OnInit} from '@angular/core';
import { ChartService } from '../../shared/chart.service';


@Component({
    selector: 'my-chart',
    templateUrl: './app/components/chart/chart.component.html',
    providers: [ChartService]
})

export class ChartComponent implements OnInit{
    chart: any[]

    constructor(private chartService: ChartService ){
        this.chart = [];
    }

    ngOnInit() {
        this.chartService
            .getDataChart()
            .then(chart => this.chart = chart)
    }
}