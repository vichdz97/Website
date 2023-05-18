import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Contacts } from '../contacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "";

  constructor(private http: HttpClient) { }

  viewContacts() {
    return this.http.get<any>(this.url);
  }

  newContact(name: string, email: string, subject: string, message: string) {
    return this.http.post<any>(this.url, { name, email, subject, message })
      .pipe(
        map((contact: Contacts) => {
          return contact;
        })
      );
  }
}
