import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') tooltipTitle: string = '';
  @Input() placement?: string;
  @Input() delay?: number;
  tooltip?: HTMLElement;
  offset = 10;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if(!this.tooltip) {
      this.show()
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.tooltip) {
      this.hide()
    }
  }

  show() {
    this.create();
    this.setPosition();
    this.tooltip?.classList.add('ng-tooltip-show');
  }

  hide(){
    this.tooltip?.classList.remove('ng-tooltip-show');
    this.tooltip?.remove();
    this.tooltip = undefined;
  }

  create(){
    this.tooltip = document.createElement('span');
    this.tooltip.classList.add('ng-tooltip');
    this.tooltip.textContent = this.tooltipTitle;
    document.body.appendChild(this.tooltip);
  }

  setPosition() {
    const elementRec = this.el.nativeElement.getBoundingClientRect();
    const tooltipRec = this.tooltip!.getBoundingClientRect();
    let top, left;

    if(!tooltipRec) return;

    switch(this.placement) {
      case 'top':
        top = elementRec.top - tooltipRec.height - this.offset;
        left = elementRec.left + (elementRec.width - tooltipRec.width) / 2;
        break;
      case 'bottom':
        top = elementRec.bottom + this.offset;
        left = elementRec.left + (elementRec.width - tooltipRec.width) / 2;
        break;
      case 'left':
        top = elementRec.top + (elementRec.height - tooltipRec.height) / 2;
        left = elementRec.left - tooltipRec.width - this.offset;
        break;
      case 'right':
        top = elementRec.top + (elementRec.height - tooltipRec.height) / 2;
        left = elementRec.right + this.offset;
        break;
      default:
        throw new Error('Invalid placement' + this.placement);
    }
    if(this.tooltip){
      this.tooltip.style.top = `${top}px`;
      this.tooltip.style.left = `${left}px`;
    };
  }
}
