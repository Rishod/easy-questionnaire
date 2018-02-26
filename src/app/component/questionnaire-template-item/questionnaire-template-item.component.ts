import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnaire-template-item',
  templateUrl: './questionnaire-template-item.component.html',
  styleUrls: ['./questionnaire-template-item.component.css']
})
export class QuestionnaireTemplateItemComponent implements OnInit {

  @Input('title')
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'none';
  }

}
