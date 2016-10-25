import {Component, OnInit} from '@angular/core';
import { ChartService } from '../../shared/chart.service';

@Component({
    selector: 'my-chart',
    templateUrl: './app/components/chart/chart.component.html',
    providers: [ChartService]
})

export class ChartComponent implements OnInit{
    type: string;
    data: any;
    options: Object;
    chart: any[];
    onlyOpenIssue: boolean;

    constructor (private chartService:ChartService) {
        this.chart = [];
        this.type = 'bar';
        this.data = {
            labels: ["test"],
            datasets: [
                {
                    label: "test",
                    data: [0]
                }
            ]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.onlyOpenIssue = false;
    }

    private getData(stateIssue:string){
        this.chartService.getLabelsList()
            .subscribe(labelList =>{this.chartService
                    .getCountListIssuesOnLabels(stateIssue, labelList)
                    .subscribe(count =>{
                        let countList = count.map(count => count['total_count']);
                        this.update(stateIssue, labelList, countList)
                    })
            })
    }

    private update(stateIssue, labelList, countList){
        console.log(this.data)
        this.data = {
            labels: labelList,
            datasets:[{
                label:`Rails/Issues is:${stateIssue}`,
                data: countList
            }]
        }
    }

    ngOnInit() {
        this.getData('all');
    }

    toggleState() {
        if(!this.onlyOpenIssue){
            this.getData('open')

        }else{
            this.getData('all')
        }
        this.onlyOpenIssue = !this.onlyOpenIssue;
    }
}