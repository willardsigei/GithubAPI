import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  repos: any;
  profile: any;

  constructor(private profileService: ProfileService) {
    {
      this.profileService = profileService;
    }
  }
  getProfileRepos() {}

  ngOnInit() {
    this.profileService.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;

    });
  }
}
