import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Imported USer Defined Components and Directives
import { basicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { TrialComponent } from './pavanExaminer/trial.component';

import { unlessStructuralDirective } from './unless-structuralDirective/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlightDirective,
    BetterHighlightDirective,
    TrialComponent,
    unlessStructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
