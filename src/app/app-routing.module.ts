import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignUpComponent } from './user/admin-sign-up/admin-sign-up.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { BibleComponent } from './bible/bible/bible.component';
import { AdminScreenComponent } from './user/admin-screen/admin-screen.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'admin-sign-up', component: AdminSignUpComponent},
  { path: 'admin', component: AdminScreenComponent},
  { path: 'bible', component: BibleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
