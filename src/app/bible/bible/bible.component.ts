import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css']
})
export class BibleComponent implements OnInit {
  item: any = null
  constructor(private httpClient: HttpClient) {

  }


  pegarVersiculo() {
    this.httpClient.get<any>(`
    www.abibliadigital.com.br/api/verses/nvi/sl/23`).subscribe((item) => {
      console.log(item);

    })
  }

  ngOnInit(): void {
    let randomNum = Math.floor(Math.random() * 150) + 1;
    this.httpClient.get<any>(`
    https://www.abibliadigital.com.br/api/verses/nvi/sl/${randomNum}`).subscribe((item) => {
      this.item = item
      console.log(item);

    })
  }
}
