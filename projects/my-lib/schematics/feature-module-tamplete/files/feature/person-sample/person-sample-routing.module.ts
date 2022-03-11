import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonSampleNewComponent } from './person-sample-new/person-sample-new.component';
import { PersonSampleEditComponent } from './person-sample-edit/person-sample-edit.component';
import { PersonSampleListComponent } from './person-sample-list/person-sample-list.component';
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PersonSampleListComponent
    }, {
        path: 'new',
        component: PersonSampleNewComponent
    }, {
        path: ':id/edit',
        component: PersonSampleEditComponent,
//        resolve: {
//            PersonSample: PersonSampleResolver
//        }
    }, {
        path: '**',
        redirectTo: '/person-sample'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonSampleRoutingModule { }