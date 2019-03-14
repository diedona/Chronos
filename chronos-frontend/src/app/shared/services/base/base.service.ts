import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService {

  protected readonly baseApiURL = "https://localhost:4560/api";

  constructor(
    protected http: HttpClient
  ) { }

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseApiURL}/${url}`);
  }

  protected post<T>(url: string, obj: any): Observable<T> {
    return this.http.post<T>(`${this.baseApiURL}/${url}`, obj);
  }

  protected put<T>(url: string, obj: any): Observable<T> {
    return this.http.put<T>(`${this.baseApiURL}/${url}`, obj);
  }

  protected delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseApiURL}/${url}`);
  }
}
