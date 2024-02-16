import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { VendorsComponent } from './vendors/vendors.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { Authuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'header', component: HeaderComponent
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'submissions', component: SubmissionsComponent,
        canActivate: [Authuard]
    },
    {
        path: 'vendors', component: VendorsComponent,
        canActivate: [Authuard]
    },
    {
        path: 'interviews', component: InterviewsComponent,
        canActivate: [Authuard]
    },
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [Authuard]
    }


];
