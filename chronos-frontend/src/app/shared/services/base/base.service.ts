import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export abstract class BaseService {

  protected readonly baseApiURL = "https://localhost:4560/api";

  constructor(
    protected http: HttpClient
  ) { }

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseApiURL}/${url}`).pipe(catchError(this.handleError));
  }

  protected post<T>(url: string, obj: any): Observable<T> {
    return this.http.post<T>(`${this.baseApiURL}/${url}`, obj).pipe(catchError(this.handleError));
  }

  protected put<T>(url: string, obj: any): Observable<T> {
    return this.http.put<T>(`${this.baseApiURL}/${url}`, obj).pipe(catchError(this.handleError));
  }

  protected delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseApiURL}/${url}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
