import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-questionnaire-template-item',
  templateUrl: './questionnaire-template-item.component.html',
  styleUrls: ['./questionnaire-template-item.component.css']
})
export class QuestionnaireTemplateItemComponent implements OnInit {

  @Input('title')
  title: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalToSend() {
    const modalData = {
      width: '400px',
      height: 'auto',
      data: {
        id: 1,
        name: 'Qname',
        email: ''
      }
    };
    this.dialog.open(SendDialogComponent, modalData);
  }

}

@Component({
  selector: 'app-send-dialog',
  templateUrl: './dialog-send-questionnaire.html'
})
export class SendDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose() {
    this.dialogRef.close();
  }

  send() {
  }

}
