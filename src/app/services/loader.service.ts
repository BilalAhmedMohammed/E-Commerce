import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  // isLoaded = new Subject<boolean>();
  constructor() {}
  // getIsLoaded() {
  //   return this.isLoaded;
  // }
  // setIsLoaded() {
  //   this.isLoaded.next(!this.isLoaded);
  // }
  isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
