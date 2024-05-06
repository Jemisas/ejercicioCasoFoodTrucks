import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, retry, throwError } from "rxjs";
import {OwnerEntity} from "../model/owner.entity";
import {environment} from "../../../environments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //Client or network error
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      // Backend error
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Observable
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  createItem(item: OwnerEntity): Observable<OwnerEntity> {
    return this.http

      .post<OwnerEntity>(environment.url, JSON.stringify(item), this.httpOptions)

      .pipe(retry(2), catchError(this.handleError));  }

  //Get all food trucks
  getList(): Observable<OwnerEntity>{
    return this.http.get<OwnerEntity>(environment.url).pipe(retry(2), catchError(this.handleError));
  }

}
