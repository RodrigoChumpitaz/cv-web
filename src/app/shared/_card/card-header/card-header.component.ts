import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardHeader',
  templateUrl: './card-header.component.html'
})
export class CardHeaderComponent {
  @Input() className!: string; 
}
