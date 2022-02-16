
import { environment } from 'src/environments/environment';
import { ProfileService } from './../profile-service/profile-service.component';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile-class/profile-class.component';
import { HttpClient } from '@angular/common/http';
import { Repostories } from '../repositories';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[]

})
export class ProfileComponent implements OnInit {

  profile!:Profile;
  username!:string;
  repos!:Repostories []; 
  profileName!:string;
  private clientID = '79b5763e808d746f79ff';
  private clientSecret = '0ffad460c25332b87fb3be7f0b8389b315ac88d8'
  


  constructor(private profileService: ProfileService,private http:HttpClient) {
    this.profileName = '/repos'
   
   }

   findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo()
    this.profile = this.profileService.profile
    this.getRepoInfo();
  
  }

  ngOnInit() {
  
  }

    getRepoInfo(){
      this.http.get<any>(environment.apiKey +this.username + this.profileName).subscribe(
        response =>{
           console.log(response);
          this.repos = response;
    
        }
      );
    }

  



}