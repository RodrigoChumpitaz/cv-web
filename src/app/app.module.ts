import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TooltipDirective } from './helpers/tooltip.directive';
import { SharedModule } from './shared/shared.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactButtonComponent,
    AvatarComponent,
    TooltipDirective,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
