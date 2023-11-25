import { Component } from '@angular/core';

import { UserModel } from 'src/app/shared/models/User'
import { SignInservice } from 'src/app/shared/services/sign-in.service';
import { createStrongPassword } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: UserModel = new UserModel('', '', false); // Certifique-se de inicializar o objeto UserModel

  constructor(private signService: SignInservice) {}

  signUp(): void {
    if(createStrongPassword(this.user.senha)) {
      this.signService.create(this.user).subscribe(() => {})
    } else {
      console.log(`??`);

    }
  }
}
