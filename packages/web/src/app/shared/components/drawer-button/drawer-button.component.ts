import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'chefia-drawer-button',
  templateUrl: './drawer-button.component.html',
  styleUrls: ['./drawer-button.component.scss'],
})
export class DrawerButtonComponent {
  @Input() icon: string;
  @Input() active: boolean;

  onClick = new EventEmitter();

  get color() {
    return this.active ? 'primary' : '';
  }

  click() {
    this.onClick.emit();
  }
}
