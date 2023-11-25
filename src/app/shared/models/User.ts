// user.model.ts

export class UserModel {
  constructor(
    public email: string,
    public senha: string,
    public ehAdmin: boolean,
    public nome?: string,
    public endereco?: string,
    public idade?: number,
    public religiao?: string,
    public ideologiaPolitica?: string,
    public profissao?: string,
    public numeroFilhos?: number,
    public rendaFamiliar?: number,
    public grauFormacao?: string,
  ) {}
}
