import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardFooter',
  templateUrl: './card-footer.component.html'
})
export class CardFooterComponent {
  @Input() className!: string;
}
