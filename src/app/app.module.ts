import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateTableComponent } from './component/template-table/template-table.component';
import { StatisticTableComponent } from './component/statistic-table/statistic-table.component';
import { QuestionnaireTableComponent } from './component/questionnaire-table/questionnaire-table.component';
import { MailTableComponent } from './component/mail-table/mail-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateTableComponent,
    StatisticTableComponent,
    QuestionnaireTableComponent,
    MailTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
