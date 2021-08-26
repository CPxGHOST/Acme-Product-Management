import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "../products/product";
import {catchError , tap} from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class DataService{
    private dataUrl = 'api/products/products.json'

    constructor(private http : HttpClient){}

    GetProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.dataUrl).pipe(
          tap(data => console.log('All' , JSON.stringify(data))),
          catchError(this.handleError) 
        );
    }

    private handleError(err : HttpErrorResponse){
        console.log(err);
        return throwError(err);
    }

}