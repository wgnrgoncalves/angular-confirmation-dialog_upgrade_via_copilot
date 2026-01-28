import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ConfirmationDialogComponent } from './app/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './app/confirmation-dialog/confirmation-dialog.service';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    ConfirmationDialogService,
    importProvidersFrom([])
  ]
}).catch(err => console.error(err));