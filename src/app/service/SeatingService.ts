import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/event.model';
import { TM } from '../model/TM.model';
import { Guest } from '../model/guest.model';

import { Observable } from 'rxjs';
import { Table } from '../model/tables.model';

@Injectable({ providedIn: 'root' })

export class SeatingService {

  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://localhost:44390/api/Algo/';
  listTables:Table[]

  getTablesList(): Observable<Table[]> {
    return this.http.get<Table[]>(`${this.baseUrl}GetEventType`);
  }

  getSeatingArrangemant() : Observable<Table[]> {
    return this.http.get<Table[]>(this.baseUrl+'GetTableList');
    //return this.listTables;
  }
}