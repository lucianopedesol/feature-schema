import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonSampleRoutingModule } from './person-sample-routing.module';
import { PersonSampleNewComponent } from './person-sample-new/person-sample-new.component';
import { PersonSampleEditComponent } from './person-sample-edit/person-sample-edit.component';
import { PersonSampleListComponent } from './person-sample-list/person-sample-list.component';


@NgModule({
  declarations: [
    PersonSampleNewComponent,
    PersonSampleEditComponent,
    PersonSampleListComponent,
  ],
  imports: [
    CommonModule,
    PersonSampleRoutingModule
  ]
})
export class AModule { }
