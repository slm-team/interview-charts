import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';

import { Bar } from './bars.model';

@Injectable()
export class BarsService {
    constructor(private http: HttpClient) {
    }

    getStaticBars(): Observable<Array<Bar>> {
        return this.http.get(environment.apiUrl)
            .map(response => response as Array<Bar> || []);
    }
}
