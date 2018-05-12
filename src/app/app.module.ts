import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateTableComponent } from './component/template-table/template-table.component';
import { StatisticTableComponent } from './component/statistic-table/statistic-table.component';
import { QuestionnaireTableComponent } from './component/questionnaire-table/questionnaire-table.component';
import { MailTableComponent } from './component/mail-table/mail-table.component';
import {
  QuestionnaireTemplateItemComponent,
  SendDialogComponent
} from './component/questionnaire-template-item/questionnaire-template-item.component';
import { ButtonComponent } from './component/button/button.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { QuestionnaireItemComponent } from './component/questionnaire-item/questionnaire-item.component';
import { MailItemComponent } from './component/mail-item/mail-item.component';
import {MatTableModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TemplateTableComponent,
    StatisticTableComponent,
    QuestionnaireTableComponent,
    MailTableComponent,
    QuestionnaireTemplateItemComponent,
    ButtonComponent,
    QuestionnaireItemComponent,
    MailItemComponent,
    SendDialogComponent
  ],
  entryComponents: [QuestionnaireTemplateItemComponent, SendDialogComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
