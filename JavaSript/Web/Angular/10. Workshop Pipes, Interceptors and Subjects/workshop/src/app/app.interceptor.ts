import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

const { apiUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  API = '/api';

  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(this.API)) {
      request = request.clone({
        url: request.url.replace(this.API, apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.errorService.setError(error);
          this.router.navigate(['/error']);
        }
        return [error];
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
