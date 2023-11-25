import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/User';
import { LogService } from 'src/app/shared/services/log.service';
import { SignInservice } from 'src/app/shared/services/sign-in.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  user: UserModel = new UserModel('', '', false);
  senhaCript: string= ''

  constructor(
    private signInService: SignInservice,
    private logService: LogService
  ) {}

  signIn() {
    this.signInService.getUser(this.user.email).subscribe((user) => {
      this.senhaCript = CryptoJS.SHA256(this.user.senha).toString(CryptoJS.enc.Hex);
      if (user[0]) {
        if (user[0].senha == this.senhaCript) {
          this.logService.logLoginAttempt(this.user.nome, true).subscribe();
        } else {
          this.logService.logLoginAttempt(this.user.nome, false).subscribe();
          alert('Usuário não encontrado ou credenciais inválidas');
        }
      }
    });
  }
}
