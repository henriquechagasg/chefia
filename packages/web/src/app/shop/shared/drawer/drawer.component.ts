import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../../../core/services/screen-size.service';
import { isNull } from 'lodash';

@Component({
  selector: 'chefia-shop-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, OnChanges {
  @Input() mode: MatDrawerMode;

  @Input() toggle: boolean;

  @ViewChild('drawer') drawer: MatDrawer;

  isLargeSize = false;

  isLargeSizeSub: Subscription;

  sideNavOpened = false;

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

  ngOnChanges(changes: SimpleChanges): void {
    const { toggle } = changes;

    if (!isNull(toggle) && !toggle.isFirstChange()) {
      this.toggleDrawer();
    }
  }

  toggleDrawer() {
    this.drawer.toggle();
  }

  clicked() {
    console.log('clicked');
  }
}
