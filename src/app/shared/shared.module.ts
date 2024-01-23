import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './_card/card/card.component';
import { CardTitleComponent } from './_card/card-title/card-title.component';
import { CardHeaderComponent } from './_card/card-header/card-header.component';
import { CardDescriptionComponent } from './_card/card-description/card-description.component';
import { CardContentComponent } from './_card/card-content/card-content.component';
import { CardFooterComponent } from './_card/card-footer/card-footer.component';
import { BadgeComponent } from './badge/badge.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    SectionComponent,
    CardComponent,
    CardTitleComponent,
    CardHeaderComponent,
    CardDescriptionComponent,
    CardContentComponent,
    CardFooterComponent,
    BadgeComponent,
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionComponent,
    CardComponent,
    CardTitleComponent,
    CardHeaderComponent,
    CardDescriptionComponent,
    CardContentComponent,
    CardFooterComponent,
    BadgeComponent,
    ToastComponent
  ]
})
export class SharedModule { }
