import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { OutputBlockComponent } from './home/output-block/output-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    OutputBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
