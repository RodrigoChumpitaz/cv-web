import { Component, Input } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() className!: string;
}
