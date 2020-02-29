import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeepsComponent } from './peeps/peeps.component';
import { BirthdaysService } from './birthdays.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PeepsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BirthdaysService]
})
export class AppModule { }
