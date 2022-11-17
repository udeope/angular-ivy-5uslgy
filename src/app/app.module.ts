import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DropdownMenu } from './dropdown-menu/dropdown-menu';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DropdownMenu ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
