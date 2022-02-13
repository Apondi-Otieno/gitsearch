import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Repo } from './repo.component';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repo: Repo;
  constructor(public repService: UserService) { }

  repoSearch(searchName: any) {
    this.repService.getRepos(searchName).then(
      (results: any) => {
        this.repo = this.repService.getRepo;
        console.log(this.repo);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}


