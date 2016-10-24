import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ChartService {
    private labelsListUrl = 'http://api.github.com/repos/rails/rails/labels?per_page=40';
    private url = 'app/shared/data.json';
    constructor(private http: Http){}

    getDataChart() {
        return this.http.get(this.url)
                    .toPromise()
                    .then(res => res.json())
                    .catch(this.handleError);
    }

    private handleError(err){
        console.log(err)
    }
}