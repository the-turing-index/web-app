import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeadingComponent } from './heading/heading.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalClassroomComponent } from './modal-classroom/modal-classroom.component';
import { MaterialModule } from '../material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeadingComponent,
    AboutComponent,
    PageNotFoundComponent,
    ModalClassroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
