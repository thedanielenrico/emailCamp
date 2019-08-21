import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { from } from 'rxjs';
import { NewClientComponent } from './new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    EmailFormComponent,
    NewClientComponent
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
