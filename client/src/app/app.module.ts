import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    ClientListComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
