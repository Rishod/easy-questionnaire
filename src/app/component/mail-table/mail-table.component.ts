import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-mail-table',
  templateUrl: './mail-table.component.html',
  styleUrls: ['./mail-table.component.css']
})
export class MailTableComponent implements OnInit {

  displayedColumns = ['Date', 'To', 'Subject'];
  dataSource = new MatTableDataSource(DATA);

  constructor() { }

  ngOnInit() {
  }


}

export interface Mail {
  id: number;
  to: string;
  subject: string;
  sentOn: string;
}

const DATA: Mail[] = [
  {id: 1, to: 'Vlad', subject: 'Please complete my questionnaire', sentOn: '03.11.2017'},
  {id: 1, to: 'Yaryna', subject: 'Sub2', sentOn: '23.01.2018'},
  ];
