import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilizator} from "./utilizator";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilizatorService {
  private serverUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }


  public getUsers(): Observable<Utilizator[]> {                               //find all
    return this.http.get<Utilizator[]>(`${this.serverUrl}/users`);
  }

  public addUser(nume: string, password: string, salar: string) {                   //add
    //console.warn("adauga",nume,"  ",password,"  ",salar);
    return this.http.post(`${this.serverUrl}/users`, {'nume': nume, 'password': password, 'salar': salar});
  }

  public updateUser(userId: number, nume: string, password: string, salar: string) {
    return this.http.put(`${this.serverUrl}/users/${userId}`, {'nume': nume, 'password': password, 'salar': salar});
  }

  public deleteUser(userId: number): Observable<String> {
    return this.http.delete<String>(`${this.serverUrl}/users/${userId}`);
  }

  public getUser(userId: number): Observable<Utilizator> {                   //find one     Optional???
    return this.http.get<Utilizator>(`${this.serverUrl}/users/${userId}`);
  }
}
