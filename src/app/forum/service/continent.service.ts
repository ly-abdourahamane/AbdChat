import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Continent} from '../model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContinentService {

  constructor(private http: HttpClient) { }

  getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>('/assets/data/continent.json');
  }
}
