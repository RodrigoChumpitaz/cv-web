import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardTitle',
  templateUrl: './card-title.component.html'
})
export class CardTitleComponent {
  @Input() className!: string;
}
