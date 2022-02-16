import { NgModule } from '@angular/core';
import { SizeDetectorComponent } from './components/size-detector/size-detector.component';
import { ScreenSizeService } from './services/screen-size.service';

@NgModule({
  imports: [],
  providers: [ScreenSizeService],
  exports: [SizeDetectorComponent],
  declarations: [SizeDetectorComponent],
})
export class CoreModule {}
