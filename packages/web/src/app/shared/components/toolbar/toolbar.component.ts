import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../../../core/services/screen-size.service';

@Component({
  selector: 'chefia-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input() title: string;

  @Output() menuClicked = new EventEmitter();

  isLargeSize = false;

  isLargeSizeSub: Subscription;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.isLargeSizeSub = this.screenSizeService.isLargeSize.subscribe(
      (isLargeSize) => {
        this.isLargeSize = isLargeSize;
      }
    );
  }

  ngOnDestroy(): void {
    this.isLargeSizeSub.unsubscribe();
  }

  clickHamburguer() {
    this.menuClicked.emit();
  }
}
