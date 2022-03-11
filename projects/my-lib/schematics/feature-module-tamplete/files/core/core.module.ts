import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ContentComponent } from './layout/content/content.component';
import { initializer } from './config/app-init';
import { AppConfig } from './config/app.config';

 

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, 
  ],
  exports: [
    ContentComponent
  ],
  providers: [
  
    { provide: LOCALE_ID, useValue: "pt-BR" },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [AppConfig]
    },
 
  ]
})
export class CoreModule { }
