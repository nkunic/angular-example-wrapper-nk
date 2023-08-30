import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, WrapperComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
