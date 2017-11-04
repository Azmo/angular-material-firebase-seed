import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css'],
})
export class FeedbackDialogComponent implements OnInit {

  public feedback: any;

  constructor(public feedbackDialog: MatDialogRef<FeedbackDialogComponent>) { }

  ngOnInit() {
    this.feedback = {};
  }

  onSubmit() {
    this.feedbackDialog.close(this.feedback);
  }
}
