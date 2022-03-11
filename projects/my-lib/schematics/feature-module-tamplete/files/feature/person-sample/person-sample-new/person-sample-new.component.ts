 
import { Component, OnInit} from '@angular/core';


import { PersonSample } from '../person-sample';
import { PersonSampleService } from '../person-sample.service';

@Component({
  selector: 'person-sample-new-app',
  templateUrl: './person-sample-new.component.html',
  styleUrls: ['./person-sample-new.component.scss']
})
export class PersonSampleNewComponent implements OnInit {

  constructor(
    private personSampleService :PersonSampleService
  ) {

  }

  ngOnInit(): void {
  }

  savePersonSample(data: PersonSample){

  }
 
}