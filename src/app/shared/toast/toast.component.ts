import { Component, Input } from '@angular/core';

@Component({
  selector: 'Toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent {
  @Input() className!: string;
}
