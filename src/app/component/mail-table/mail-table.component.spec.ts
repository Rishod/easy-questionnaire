import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTableComponent } from './mail-table.component';

describe('MailTableComponent', () => {
  let component: MailTableComponent;
  let fixture: ComponentFixture<MailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
