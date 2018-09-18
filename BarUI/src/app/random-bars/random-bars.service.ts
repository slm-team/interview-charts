import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import { Bar } from '../bars';

@Injectable()
export class RandomBarsService {
    constructor(private http: HttpClient) {
    }

    getRandomBars(): Observable<Array<Bar>> {
        // TODO
        return;
    }
}
