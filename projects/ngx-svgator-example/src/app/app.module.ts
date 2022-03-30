import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSvgatorModule } from 'dist/ngx-svgator';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSvgatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
