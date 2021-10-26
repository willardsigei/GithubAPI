import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'b71354f7989bba23d432';
  private clientsecret = '3092b94a8fc3c50f5470873ae158d038c48de8b4';

  constructor(private http: HttpClient) {
    this.username = 'willardsigei';
  }

  getdata() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

