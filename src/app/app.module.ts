import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from "./data.service";
import {DocumentService} from "./document.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {unifiedFactory} from "./unified-factory";
import { MarkdownComponent } from './markdown/markdown.component';
import {BlockComponent} from "./block/block.component";
import {InlineComponent} from "./inline/inline.component";


@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    BlockComponent,
    InlineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    DataService,
    DocumentService,
    {
      provide: 'unified',
      useFactory: unifiedFactory,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
