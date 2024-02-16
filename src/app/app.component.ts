import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { VendorsComponent } from './vendors/vendors.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { Authuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent,LoginComponent,SignupComponent,SubmissionsComponent,VendorsComponent,InterviewsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'submissionreport';
}
