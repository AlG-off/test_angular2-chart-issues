import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class ChartService {
    private labelsListUrl:string = 'http://api.github.com/repos/rails/rails/labels?per_page=3';
    private srchUrl:string = 'http://api.github.com/search/issues?q=repo:rails/rails';

    constructor(private http: Http){
    }

    public getLabelsList(){
        const BASIC_URL = this.labelsListUrl;
        return this.http.get(BASIC_URL)
                    .map(res => res.json().map(item => item.name))
                    .catch(this.handleError);
    }

    public getCountListIssuesOnLabels(state:string, labelsList:string[]) {
        if (state === 'all') {
            state = 'open+state:closed';
        }
        const PER_PAGE:string = 'per_page=1';
        const BASIC_URL:string = this.srchUrl;
        let arrObserv = [];

        labelsList.forEach(label => {
            let url = `${BASIC_URL}+label:${label}+state:${state}&${PER_PAGE}`;
            arrObserv.push(this.getCountIssuesOnLabel(url));
        });
        return Observable.forkJoin(arrObserv);
    }

    private getCountIssuesOnLabel(url) {
        return this.http
                    .get(url)
                    .map(res => res.json())
    }

    private handleError(err){
        console.log(err);
        return Observable.throw(err.message || err);
    }
}