import {Component, OnInit} from '@angular/core';
import { ChartService } from '../../shared/chart.service';


@Component({
    selector: 'my-chart',
    templateUrl: './app/components/chart/chart.component.html',
    providers: [ChartService]
})

export class ChartComponent implements OnInit{
    type: string;
    data: Object;
    options: Object;
    chart: any[];

    constructor (private chartService:ChartService) {
        this.chart = [];
        this.type = 'line';
        this.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Rails/Issues is:open",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
    }


    ngOnInit() {
        this.chartService
            .getDataChart()
            .then(chart => this.chart = chart)
    }
    change() {
        this.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [-65, 159, 180, 801, 5, 5, 47]
                }
            ]
        }
    }
}