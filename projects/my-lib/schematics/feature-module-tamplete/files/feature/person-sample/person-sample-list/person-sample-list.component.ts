 
import { Component, OnInit} from '@angular/core';

import { PersonSample } from '../person-sample';
import { PersonSampleService } from '../person-sample.service';

@Component({
  selector: 'person-sample-list-app',
  templateUrl: './person-sample-list.component.html',
  styleUrls: ['./person-sample-list.component.scss']
})
export class PersonSampleListComponent implements OnInit {

  constructor(
    private personSampleService :PersonSampleService
  ) { 

  }

  ngOnInit(): void {
    this.findAllPersonSample();
  }
  
  findAllPersonSample(){

  }
  createPersonSample(){

  }
  updatePersonSample(id: string){

  }
  deletePersonSample(id: string){

  }
}