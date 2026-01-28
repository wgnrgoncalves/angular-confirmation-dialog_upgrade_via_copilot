import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() btnOkText: string = 'OK';
  @Input() btnCancelText: string = 'Cancel';
  
  isVisible: boolean = false;
  resolveCallback: ((value: boolean) => void) | null = null;

  constructor() { }

  ngOnInit() {
  }

  public decline() {
    if (this.resolveCallback) {
      this.resolveCallback(false);
      this.isVisible = false;
    }
  }

  public accept() {
    if (this.resolveCallback) {
      this.resolveCallback(true);
      this.isVisible = false;
    }
  }

  public dismiss() {
    if (this.resolveCallback) {
      this.resolveCallback(false);
      this.isVisible = false;
    }
  }

  public show(callback: (value: boolean) => void) {
    this.isVisible = true;
    this.resolveCallback = callback;
  }
}
