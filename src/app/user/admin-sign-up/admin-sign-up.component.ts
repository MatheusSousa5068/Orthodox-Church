import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/User';
import { SignInservice } from 'src/app/shared/services/sign-in.service';
import { createStrongPassword } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent {
  admin: UserModel = new UserModel('', '', true);

  constructor(private signService: SignInservice) {}

  signUp(): void {
    if(createStrongPassword(this.admin.senha)) {
      this.signService.create(this.admin).subscribe(() => {})
    }
  }
}
