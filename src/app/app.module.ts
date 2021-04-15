import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "./shared/modules/material/material.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FirstTabComponent } from "./first-tab/first-tab.component";
import { SecondTabComponent } from "./second-tab/second-tab.component";
import { ControlComponent } from "./first-tab/control/control.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstTabComponent,
    SecondTabComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
