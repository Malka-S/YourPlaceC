import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../model/guest.model';
import { Observable } from 'rxjs';
import { BaseCode } from '../model/baseCode';

// import {ApiResponse} from "../model/api.response";


@Injectable({ providedIn: 'root' })
export class GuestService {

  constructor(private http: HttpClient) {}
  baseApiUrl = "https://localhost:44390/api/Guest/";

  getCatagoryList(): Observable<BaseCode[]> {
    return this.http.get<BaseCode[]>(`${this.baseApiUrl}GetCatagoryList`);
  }
//   getGuest() : Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.baseUrl);
//   }
  
//   getGuestById(id: number): Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.baseUrl + id);
//   }

   createGuest(guest: Guest): Observable<any> {
    return this.http.post<Guest>(this.baseApiUrl, guest);
  }
 
  // updateGuest(guest: Guest): Observable<> {
  //   return this.http.put<ApiResponse>(this.baseUrl + guest.guest_id, guest);
  // }

  deleteGuest(id: number): Observable<Guest> {
    return this.http.delete<Guest>(this.baseApiUrl + id);
  }
  
  }
