import { Injectable } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  transform(data: any[]): void {
    const options = {
      headers: ['email', 'senha', 'é Admin', 'nome', 'endereco', 'idade', 'religiao', 'ideologia Politica', 'profissao', 'numero de Filhos', 'renda Familiar', 'grau de Formacao'],
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
    };

    new ngxCsv(data, 'report', options);

  }

}
