import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@NgModule({
  imports: [ BrowserModule, AppComponent, ConfirmationDialogComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ConfirmationDialogService ],
})
export class AppModule { }
