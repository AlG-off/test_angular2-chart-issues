import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ChartService {
    private labelsListUrl = 'http://api.github.com/repos/rails/rails/labels?per_page=40';
    private srchUrl = 'http://api.github.com';
    private url = 'app/shared/data.json';

    constructor(private http: Http){}

    getDataChart() {
        return
    }
    private getLabelsList(): Promise<any>{
        return this.http.get(this.url)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    private handleError(err: any): Promise<any>{
        console.log(err);
        return Promise.reject(error.message || error);
    }
}