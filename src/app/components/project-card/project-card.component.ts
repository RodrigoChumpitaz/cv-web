import { Component, Input } from '@angular/core';

@Component({
  selector: 'ProjectCard',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() tags!: string;
  @Input() description!: string;
  @Input() link!: string;
}
