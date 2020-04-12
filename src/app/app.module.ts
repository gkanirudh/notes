import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes/notes.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './pop-up/popup.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    NoteComponent,
    CreateComponent,
    PopupComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
