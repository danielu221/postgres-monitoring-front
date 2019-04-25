import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/modules/material.module';
import { StatementsModule } from './modules/statements/statements.module';
import { ActivityModule } from './modules/activity/activity.module';
import { HttpClientModule } from '@angular/common/http';
import { DocumentationModule } from './modules/documentation/documentation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ActivityModule,
    StatementsModule,
    HttpClientModule,
    DocumentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
