import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactSingleComponent } from './features/advisor/contact-single/contact-single.component';
import { AuthGuard } from './auth.guard';
import { AdvisorGuard } from './advisor.guard';
import { HomeComponent as AdvisorHomeComponent } from './features/advisor/home/home.component';
import { HomeComponent as ClientHomeComponent } from './features/client/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdvisorComponent } from './features/advisor/advisor.component';
import { ContactsComponent as AdvisorContactsComponent } from './features/advisor/contacts/contacts.component';
import { OpportunitiesComponent as AdvisorOpportunitiesComponent } from './features/advisor/opportunities/opportunities.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthGuard],
    children: [
      {
        path: 'advisor',
        canActivate: [AdvisorGuard],
        component: AdvisorComponent,
        children: [
          {
            path: '',
            component: AdvisorHomeComponent
          },
          {
            path: 'contacts/:id',
            component: ContactSingleComponent
          },
          {
            path: 'contacts',
            component: AdvisorContactsComponent
          },
          {
            path: 'opportunities',
            component: AdvisorOpportunitiesComponent
          }
        ]
      },
      {
        path: 'client',
        component: ClientHomeComponent
      },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
