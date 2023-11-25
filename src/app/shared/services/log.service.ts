import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private apiUrl = `${environment.URL_API}/logs`;

  constructor(private http: HttpClient) {}

  logLoginAttempt(username: string | undefined, success: boolean) {
    const timestamp = new Date().toISOString();

    return this.http.post<any>(this.apiUrl, {
      "timestamp": timestamp,
      "usuario": username,
      "sucesso": success
    })
  }
}
