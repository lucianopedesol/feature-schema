 
import { Component, OnInit} from '@angular/core';


import { PersonSample } from '../person-sample';
import { PersonSampleService } from '../person-sample.service';

@Component({
  selector: 'person-sample-edit-app',
  templateUrl: './person-sample-edit.component.html',
  styleUrls: ['./person-sample-edit.component.scss']
})
export class PersonSampleEditComponent implements OnInit {

  constructor(
    private personSampleService :PersonSampleService
  ) { 
      
  }


  ngOnInit(): void {
    this.findPersonSample();
  }

  findPersonSample(){

  }
 
  savePersonSample(data: PersonSample){

  }

  deletePersonSample(id: string){

  }

}