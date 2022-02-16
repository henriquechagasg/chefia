import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'chefia-size-detector',
  templateUrl: './size-detector.component.html',
  styleUrls: ['./size-detector.component.scss'],
})
export class SizeDetectorComponent implements OnDestroy {
  destroyed = new Subject<void>();
  title = 'web';

  constructor(
    breakpointObserver: BreakpointObserver,
    screenSizeService: ScreenSizeService
  ) {
    breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        screenSizeService.setIsLargeSize(result.matches);
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
