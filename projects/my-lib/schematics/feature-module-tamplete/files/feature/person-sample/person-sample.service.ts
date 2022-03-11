// #docregion template
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../../core/config/app.config';
import {BaseService} from '../../shared/services/base.service';
import { PersonSample } from './person-sample';

@Injectable({
  providedIn: 'root'
})
export class PersonSampleService extends BaseService{
  constructor(private http: HttpClient) {
    super(`${AppConfig.settings.urlApi}/PersonSample`, http);
   }


   public save(data: PersonSample): Observable<PersonSample> {
    return super.salvarBase<PersonSample>(data);
  }

  public update(data: PersonSample): Observable<PersonSample> {
    return super.atualizarBase<PersonSample>(data.id, data);
  }

  public detele(id: string): any {
    return super.deleteBase(id);
  }
}