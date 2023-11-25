import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/shared/models/User';
import { SignInservice } from 'src/app/shared/services/sign-in.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userId: string = '';
  user!: UserModel;

  constructor(private route: ActivatedRoute, private userService: SignInservice) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];

      this.userService.getUserById(this.userId).subscribe(user => {
        this.user = user;
      });
    });
  }

  updateUser() {
    this.userService.updateUser(this.user, this.userId).subscribe(updatedUser => {
      console.log('Informações do usuário atualizadas com sucesso:', updatedUser);
    });
  }
}
