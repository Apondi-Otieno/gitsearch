import { Injectable } from '@angular/core';
import { Profile } from '../profile-class/profile-class.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  updateProfile(username: string) {
    throw new Error('Method not implemented.');
  }

  private username!: string;
  private clientID = '79b5763e808d746f79ff';
  private clientSecret = '0ffad460c25332b87fb3be7f0b8389b315ac88d8'


  profile!: Profile;
  
  constructor(private http: HttpClient) {
    console.log("service is working");
    this.username = 'Apondi-Otieno';

    this.profile = new Profile("", "", "", "", "", "", "", "", "");
    

  }

  getProfileInfo() {
    interface ApiResponse {
      api_url: any;
      name: string;
      avatar_url: string;
      company: string;
      hireable: string;
      public_repos: string;
      followers: string;
      following: string;
      html_url: string;
      login: string
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment + this.username + "?client_id =" + this.clientID + "&clientsecret =" + this.clientSecret).toPromise().then(response => {
        this.profile.name = response!.name;
        this.profile.avatar_url = response!.avatar_url;
        this.profile.company = response!.company;
        this.profile.hireable = response!.hireable;
        this.profile.followers = response!.followers;
        this.profile.following = response!.following;
        this.profile.html_url = response!.html_url;
        this.profile.apiUrl = response!.api_url;
        this.profile.public_repos = response!.public_repos;
        this.profile.login = response!.login

        resolve(null)
      },
        error => {
          console.log("User not found");

          reject(error)
        });
    })

    return promise


  }}