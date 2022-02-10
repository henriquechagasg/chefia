import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'chefia-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss'],
  animations: [
    trigger('addItem', [
      state(
        'firstNoTranslated',
        style({
          transform: 'translateY(0px)',
        })
      ),
      state(
        'firstTranslated',
        style({
          transform: 'translateY(-30px)',
        })
      ),
      state(
        'secondTranslated',
        style({
          transform: 'translateY(30px)',
        })
      ),
      state(
        'secondNoTranslated',
        style({
          transform: 'translateY(0px)',
        })
      ),
      transition('firstNoTranslated => firstTranslated', animate('200ms ease')),
      transition(
        'secondTranslated => secondNoTranslated',
        animate('300ms ease')
      ),
    ]),
    trigger('removeItem', [
      state(
        'firstNoTranslated',
        style({
          transform: 'translateY(0px)',
        })
      ),
      state(
        'firstTranslated',
        style({
          transform: 'translateY(30px)',
        })
      ),
      state(
        'secondTranslated',
        style({
          transform: 'translateY(-30px)',
        })
      ),
      state(
        'secondNoTranslated',
        style({
          transform: 'translateY(0px)',
        })
      ),
      transition('firstNoTranslated => firstTranslated', animate('200ms ease')),
      transition(
        'secondTranslated => secondNoTranslated',
        animate('300ms ease')
      ),
    ]),
  ],
})
export class AddToCartButtonComponent {
  public addClicked = false;
  public removeClicked = false;
  public isAnimating = false;
  public value = 0;
  @Output() addEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  addItem() {
    if (this.isAnimating) return;
    this.addClicked = true;
    this.addEvent.emit();
    setTimeout(() => {
      this.value++;
      this.addClicked = false;
    }, 200);
  }

  removeItem() {
    if (this.value === 0 || this.isAnimating) return;
    this.removeClicked = true;
    this.removeEvent.emit();
    setTimeout(() => {
      this.value--;
      this.removeClicked = false;
    }, 200);
  }
}
