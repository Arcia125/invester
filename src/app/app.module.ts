import { OpportunityService } from './services/opportunity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { AdvisorModule } from './features/advisor/advisor.module';
import { ClientModule } from './features/client/client.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { MockDataService } from './mock-data.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogService } from './services/log/log.service';
import { PipesModule } from './pipes/pipes.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { UserService } from './services/user.service';
import { MatNativeDateModule } from '@angular/material/core';
import { ContactService } from './services/contact.service';
import { ContactSingleComponent } from './features/advisor/contact-single/contact-single.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactSingleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    PipesModule,
    SharedComponentsModule,
    AdvisorModule,
    ClientModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    !environment.production ? HttpClientInMemoryWebApiModule.forRoot(MockDataService, { delay: 300 }) : [],
  ],
  providers: [
    ApiService,
    AuthService,
    LogService,
    UserService,
    ContactService,
    OpportunityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
