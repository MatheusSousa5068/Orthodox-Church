import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserModel } from '../models/User';
import { environment } from 'src/environments/environment.development';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SignInservice {
  private apiUrl = `${environment.URL_API}/users`;

  constructor(private http: HttpClient) {}

  getUser(email: string): Observable<UserModel[]> {
    const params = new HttpParams().set('email', email);
    return this.http.get<UserModel[]>(this.apiUrl, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserById(id: any) {
    return this.http.get<UserModel>(`${this.apiUrl}/${id}`)
  }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(user: UserModel): Observable<UserModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const senhaCriptografada = CryptoJS.SHA256(user.senha).toString(CryptoJS.enc.Hex);
    user.senha = senhaCriptografada;

    return this.http.post<UserModel>(this.apiUrl, user, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(user: UserModel, id: any) {
    return this.http.put<UserModel>(`${this.apiUrl}/${id}`, user)
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    throw error;
  }
}
