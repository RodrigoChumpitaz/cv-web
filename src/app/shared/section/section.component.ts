import { Component, Input } from '@angular/core';

@Component({
  selector: 'Section',
  template: `
    <section class="flex min-h-0 flex-col gap-y-3 mt-3" [ngClass]="className">
      <ng-content></ng-content>
    </section>
  `,
})
export class SectionComponent {
  @Input() className?: string;
}
