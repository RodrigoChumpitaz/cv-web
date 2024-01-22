import { ElementRef } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new TooltipDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
