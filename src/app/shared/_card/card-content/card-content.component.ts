import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardContent',
  templateUrl: './card-content.component.html'
})
export class CardContentComponent {
  @Input() className!: string;
}
