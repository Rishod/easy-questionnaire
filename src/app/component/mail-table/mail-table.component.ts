import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-table',
  templateUrl: './mail-table.component.html',
  styleUrls: ['./mail-table.component.css']
})
export class MailTableComponent implements OnInit {

  displayedColumns = ['Date', 'To', 'Subject'];
  dataSource = DATA;
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
  {id: 1, to: 'Vlad', subject: 'Sub1', sentOn: '03.11.1996'},
  {id: 1, to: 'Yaryna', subject: 'Sub2', sentOn: '23.01.1994'},
  {id: 1, to: 'Nadia', subject: 'Sub3', sentOn: '30.10.200'}
  ];
