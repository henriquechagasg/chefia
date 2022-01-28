import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chefia-small-action-item',
  templateUrl: './small-action-item.component.html',
  styleUrls: ['./small-action-item.component.scss'],
})
export class SmallActionItemComponent implements OnInit {
  title = 'Miso Ginger Quinoa';
  descriptions = 'Buttery, flaky pastry named for its crescent shape.';
  constructor() {}

  ngOnInit(): void {}
}
