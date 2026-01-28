import { Injectable, ViewContainerRef } from '@angular/core';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  private dialogComponent: ConfirmationDialogComponent | null = null;

  constructor() { }

  setDialogComponent(component: ConfirmationDialogComponent) {
    this.dialogComponent = component;
  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
      if (this.dialogComponent) {
        this.dialogComponent.title = title;
        this.dialogComponent.message = message;
        this.dialogComponent.btnOkText = btnOkText;
        this.dialogComponent.btnCancelText = btnCancelText;
        this.dialogComponent.show((value: boolean) => {
          resolve(value);
        });
      } else {
        reject(new Error('Dialog component not initialized'));
      }
    });
  }
}
