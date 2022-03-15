import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq=request.clone(
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'my-auth-token',
          }),
      }
    )
    this.loaderService.show();
    return next.handle(authReq).pipe(finalize(()=>{
      this.loaderService.hide();
    }))
  }
}
