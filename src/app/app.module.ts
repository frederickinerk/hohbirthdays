import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { PeepsComponent } from './peeps/peeps.component';
import { BirthdaysService } from './birthdays.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, PeepsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BirthdaysService]
})
export class AppModule { }
