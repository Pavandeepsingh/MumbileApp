import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs/observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class BaseService {

  constructor(private httpClient: HttpClient, private loggerService: LoggerService) { }

  postData(url: string, data: any, headers: any): Observable<any> {
    Object.assign(headers, {
    });
    let header = new HttpHeaders(headers);

    const httpOptions = {
      headers: headers
    };

    return this.httpClient.post<any>(url, data, httpOptions).pipe(
      tap((d: any) => this.loggerService.info('baseService postData get called.')),
      catchError(this.handleError<any>('base service post', 'error'))
    );
  }

  getData(url: string, headers: any): Observable<any> {
    Object.assign(headers, {
    });
    let header = new HttpHeaders(headers);

    const httpOptions = {
      headers: headers
    };
    let data: any;
    return this.httpClient.get(url, httpOptions).pipe(
      tap((response: any) => { data = response, console.log("baseService get data returned.") }),
      catchError(this.handleError<any>('base service get', 'error')));
  };

  deleteData(url: string, headers: any): Observable<any> {
    Object.assign(headers, {
    });
    let header = new HttpHeaders(headers);

    const httpOptions = {
      headers: headers
    };

    return this.httpClient.delete<any>(url, httpOptions).pipe(
      tap(_ => this.loggerService.info('baseService deleted the data')),
      catchError(this.handleError<any>('base service delete', 'error'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      this.loggerService.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  };

  postMethod(url: string, data: any, headers: any): Observable<any> {
    let header = new HttpHeaders(headers);

    const httpOptions = {
      headers: headers
    };

    return this.httpClient.post<any>(url, data, httpOptions).pipe(
      tap((d: any) => this.loggerService.info('baseService postData get called.')),
      catchError(this.handleError<any>('base service post', 'error'))
    );
  }
}
