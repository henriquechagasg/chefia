import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScreenSizeService {
  private isLargeSize$ = new BehaviorSubject<boolean>(false);

  isLargeSize = this.isLargeSize$.asObservable();

  setIsLargeSize(value: boolean): void {
    this.isLargeSize$.next(value);
  }
}
