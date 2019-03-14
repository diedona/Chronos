import { MessagesService } from './../messages.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    private readonly baseAPIUrl = "https://localhost:4789/api";

    constructor(
        public messageService: MessagesService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // SETS THE ROOT API URL
        req = req.clone({ url: `${this.baseAPIUrl}/${req.url}` });

        // GLOBAL ERROR HANDLING
        return next.handle(req).pipe(
            // map((event: HttpEvent<any>) => {
            //     if (event instanceof HttpResponse) {
            //         console.log("event:", event);
            //     }
            //     return event;
            // })
            catchError(err => this.handleError(err))
        );
    }

    private handleError(error: HttpErrorResponse) {
        const data = { type: "", message: "", status: -1, body: "" };

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // console.error('An error occurred:', error.error.message);
            console.log(error);
            data.type = "Cliente Side / Network";
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            // console.error(
            //     `Backend returned code ${error.status}, ` +
            //     `body was: ${error.error}`);
            data.body = error.error;
            data.type = "Backend Side";
        }

        data.message = error && error.error.reason ? error.error.reason : '';
        data.status = error.status;

        //console.log("DATA:", data);
        const friendlyMessage = "Um erro ocorreu durante a requisição! Por favor, tente novamente.";
        this.messageService.error(friendlyMessage);

        // return an observable with a user-facing error message
        return throwError(friendlyMessage);
    };
}