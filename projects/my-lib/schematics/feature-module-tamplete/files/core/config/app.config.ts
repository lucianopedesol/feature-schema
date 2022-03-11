import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from './app.config.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  static settings: IAppConfig;
  
  constructor(private http: HttpClient) { }
  load() {
    const jsonFile = `src/app/core/config/environment.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response) => {
        AppConfig.settings = <IAppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
} 
