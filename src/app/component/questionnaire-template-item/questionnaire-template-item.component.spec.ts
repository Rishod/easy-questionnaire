import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireTemplateItemComponent } from './questionnaire-template-item.component';

describe('QuestionnaireTemplateItemComponent', () => {
  let component: QuestionnaireTemplateItemComponent;
  let fixture: ComponentFixture<QuestionnaireTemplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireTemplateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
