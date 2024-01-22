import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnInit{
  @Input() className!: string;
  @Input() variant!: string;
  class: string = 'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap';

  ngOnInit() {
    if(this.variant === 'secondary'){
      this.class = 'border-transparent bg-secondary hover:bg-secondary/60';
    }
    if(this.variant === 'destructive'){
      this.class = 'border-transparent bg-destructive hover:bg-destructive/80';
    }
    // switch(this.variant){
    //   case 'secondary':
    //     this.class = 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60';
    //     break;
    //   case 'destructive':
    //     this.class = 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80';
    //     break;
    // }
  }
}
