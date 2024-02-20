import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // Generic GET request
  get<T>(url: string, options?: any): Observable<T> {
    return this.http.get<ApiResponse<T>>(url, options).pipe(
      catchError(this.handleError),
      map((res: HttpEvent<ApiResponse<T>>) => {
        if (res instanceof HttpResponse) {
          return res.body?.data as T;
        }
        return res as T;
      })
    );
  }

  // Generic POST request
  post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.http.post<ApiResponse<T>>(url, body, options).pipe(
      catchError(this.handleError),
      map((res: HttpEvent<ApiResponse<T>>) => {
        if (res instanceof HttpResponse) {
          return res.body?.data as T;
        }
        return res as T;
      })
    );
  }

  // Generic PUT request
  put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.http.put<ApiResponse<T>>(url, body, options).pipe(
      catchError(this.handleError),
      map((res: HttpEvent<ApiResponse<T>>) => {
        if (res instanceof HttpResponse) {
          return res.body?.data as T;
        }
        return res as T;
      })
    );
  }

  // Generic DELETE request
  delete<T>(url: string, options?: any): Observable<T> {
    return this.http.delete<ApiResponse<T>>(url, options).pipe(
      catchError(this.handleError),
      map((res: HttpEvent<ApiResponse<T>>) => {
        if (res instanceof HttpResponse) {
          return res.body?.data as T;
        }
        return res as T;
      })
    );
  }
}
