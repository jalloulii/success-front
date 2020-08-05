import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { UserManagementsComponent } from './components/private/user-managements/user-managements.component';
import { ProfManagementsComponent } from './components/private/prof-managements/prof-managements.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/public/home/home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { LogoComponent } from './components/public/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/private/sidebar/sidebar.component';
import { AddUserComponent } from './components/private/user-managements/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProfComponent } from './components/private/prof-managements/add-prof/add-prof.component';
import { WhyUsComponent } from './components/private/why-us/why-us.component';
import { UpdateProfComponent } from './components/private/prof-managements/update-prof/update-prof.component';
import { UpdateUserComponent } from './components/private/user-managements/update-user/update-user.component';
import { CoursesManagementComponent } from './components/private/courses-management/courses-management.component'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// lotti : 


import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

// Material component Angular :

// spinner loader : 


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCourseComponent } from './components/private/courses-management/add-course/add-course.component';
import { CourseClickedComponent } from './components/private/course-clicked/course-clicked.component';
import { TestComponent } from './test/test.component';
import { AddSoldeComponent } from './components/private/profile/solde-management/add-solde/add-solde.component';
import { DesignComponent } from './components/public/categories-courses/design/design.component';
import { DevelomentComponent } from './components/public/categories-courses/develoment/develoment.component';
import { PhotoGraphyComponent } from './components/public/categories-courses/photo-graphy/photo-graphy.component';
import { TeachingComponent } from './components/public/categories-courses/teaching/teaching.component';
import { GamingComponent } from './components/public/categories-courses/gaming/gaming.component';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    UserManagementsComponent,
    ProfManagementsComponent,
    DashboardComponent,
    Page404Component,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoComponent,
    SidebarComponent,
    AddUserComponent,
    AddProfComponent,
    WhyUsComponent,
    UpdateProfComponent,
    UpdateUserComponent,
    CoursesManagementComponent,
    AddCourseComponent,
    CourseClickedComponent,
    TestComponent,
    AddSoldeComponent,
    DesignComponent,
    DevelomentComponent,
    PhotoGraphyComponent,
    TeachingComponent,
    GamingComponent,

    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
