import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  @Input('to')
  public to: string;
  @Input('subject')
  public subject: string;
  @Input('status')
  public status: string;
  @Input('sentOn')
  public sentOn: string;

  constructor() { }

  ngOnInit() {
  }

}
