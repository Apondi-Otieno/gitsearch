
import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  

  repos!:Repositories []; 

  constructor( private http:HttpClient) {

  }

  ngOnInit() {
    this.getRepoInfo();
  
  }

  getRepoInfo(){
    this.http.get<any>("https://api.github.com/users/Apondi-Otieno/repos").subscribe(
      response =>{
         console.log(response);
        this.repos = response;
      }
    );
  }

}