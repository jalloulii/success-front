import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { HomeComponent } from './components/public/home/home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { UserManagementsComponent } from './components/private/user-managements/user-managements.component';
import { ProfManagementsComponent } from './components/private/prof-managements/prof-managements.component';
import { AddUserComponent } from './components/private/user-managements/add-user/add-user.component';
import { AddProfComponent } from './components/private/prof-managements/add-prof/add-prof.component';
import { AuthGuard } from './auth.guard';
import { WhyUsComponent } from './components/private/why-us/why-us.component';
import { UpdateUserComponent } from './components/private/user-managements/update-user/update-user.component';
import { UpdateProfComponent } from './components/private/prof-managements/update-prof/update-prof.component';
import { CoursesManagementComponent } from './components/private/courses-management/courses-management.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { AddCourseComponent } from './components/private/courses-management/add-course/add-course.component';
import { CourseClickedComponent } from './components/private/course-clicked/course-clicked.component';
import { AddSoldeComponent } from './components/private/profile/solde-management/add-solde/add-solde.component';
import { DesignComponent } from './components/public/categories-courses/design/design.component';
import { DevelomentComponent } from './components/public/categories-courses/develoment/develoment.component';
import { PhotoGraphyComponent } from './components/public/categories-courses/photo-graphy/photo-graphy.component';
import { TeachingComponent } from './components/public/categories-courses/teaching/teaching.component';
import { GamingComponent } from './components/public/categories-courses/gaming/gaming.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "why-us",
    component: WhyUsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "user-list",
    component: UserManagementsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "user-update/:id",
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "profs-list",
    component: ProfManagementsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "add-prof",
    component: AddProfComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "prof-update/:id",
    component: UpdateProfComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "courses-list",
    component: CoursesManagementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "add-course",
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "view-course/:id",
    component: CourseClickedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categorie-design",
    component: DesignComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categorie-development",
    component: DevelomentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categorie-photography",
    component: PhotoGraphyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categorie-teaching",
    component: TeachingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categorie-gaming",
    component: GamingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "add-solde/:id",
    component: AddSoldeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    component: Page404Component,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
