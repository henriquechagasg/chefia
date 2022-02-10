import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'chefia-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit {
  cardDescription =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToProduct() {
    console.log('clicked');
    this.router.navigate([{ outlets: { primary: 'menu', shop: 'product' } }]);
  }
}
