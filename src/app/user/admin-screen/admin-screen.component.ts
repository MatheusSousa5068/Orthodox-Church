import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UserModel } from 'src/app/shared/models/User';
import { CsvService } from 'src/app/shared/services/csv.service';
import { SignInservice } from 'src/app/shared/services/sign-in.service';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css'],
})
export class AdminScreenComponent implements OnInit {
  colunasVisiveis = [
    'email', 'ehAdmin', 'nome', 'endereco', 'idade', 'religiao',
    'ideologiaPolitica', 'profissao', 'numeroFilhos', 'rendaFamiliar', 'grauFormacao'
  ];
  users: UserModel[] = [];

  constructor(
    private csvService: CsvService,
    private userService: SignInservice,
    private sanitizer: DomSanitizer
  ) {}

  baixar() {
    this.userService.getAll().subscribe((all) => {
      this.csvService.transform(all);
    });

    alert('Uma cópia dos dados foi enviado para seu email')
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html || '');
  }

  ngOnInit() {
    this.userService.getAll().subscribe((all) => {
      this.users = all;
    });
  }
}
