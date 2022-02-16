import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../core/services/screen-size.service';

@Component({
  selector: 'chefia-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  isLargeSize = false;

  isLargeSizeSub: Subscription;

  sideNavOpened = false;

  sideNavState: string;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.isLargeSizeSub = this.screenSizeService.isLargeSize.subscribe(
      (isLargeSize) => {
        const openSideNavOnLargeSize = isLargeSize && !this.sideNavOpened;

        const closeSideNavOnSmallSize = this.isLargeSize && !isLargeSize;

        if (openSideNavOnLargeSize) {
          this.sideNavOpened = true;
        }

        if (closeSideNavOnSmallSize) {
          this.sideNavOpened = false;
        }

        this.isLargeSize = isLargeSize;
      }
    );
  }

  ngOnDestroy(): void {
    this.isLargeSizeSub.unsubscribe();
  }
}
