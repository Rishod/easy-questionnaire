import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnaire-item',
  templateUrl: './questionnaire-item.component.html',
  styleUrls: ['./questionnaire-item.component.css']
})
export class QuestionnaireItemComponent implements OnInit {

  @Input('name')
  name: string;
  @Input('completedOn')
  completedOn: string;

  constructor() { }

  ngOnInit() {
  }

}
