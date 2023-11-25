import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AdminSignUpComponent,
    AdminScreenComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule
  ], exports: [
    SignInComponent,
    SignUpComponent,
    AdminSignUpComponent,
    AdminScreenComponent
  ]
})
export class UserModule { }
