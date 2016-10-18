import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { HtmlEditorComponent } from './htmlEditor/htmlEditor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations:  [ HelloComponent, HtmlEditorComponent],
  bootstrap:     [ HelloComponent, HtmlEditorComponent ]
})
export class AppModule { }
