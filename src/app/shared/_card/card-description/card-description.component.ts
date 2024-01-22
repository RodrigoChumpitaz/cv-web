import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardDescription',
  templateUrl: './card-description.component.html'
})
export class CardDescriptionComponent {
  @Input() className!: string;
}
