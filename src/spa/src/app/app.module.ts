import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppComponentModule } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, AppComponentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
