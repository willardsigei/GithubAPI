import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private profileservice: ProfileService) {
    this.profileservice.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }
  findProfile() {
    this.profileservice.updateProfile(this.username);
    this.profileservice.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}
