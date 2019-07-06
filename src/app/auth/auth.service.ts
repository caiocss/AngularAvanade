import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password) {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDNeHwe5d-ms4-9n6lnGPFRVKHsft1GeKQ', {
      email,
      password,
    });
  }

  createAccount(email, password) {
// tslint:disable-next-line: max-line-length
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDNeHwe5d-ms4-9n6lnGPFRVKHsft1GeKQ', {
      email,
      password,
    });
  }

  setUser(user) {
    this.pUser.next(user);
  }

  logout() {

  }

  verifyToken(token) {
// tslint:disable-next-line: max-line-length
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDNeHwe5d-ms4-9n6lnGPFRVKHsft1GeKQ', {
      idToken: token
    });
  }
}
