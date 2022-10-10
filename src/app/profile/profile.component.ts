import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/model/profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileInfo!: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.profileUpdated.subscribe(
      (profile) => {
        this.profileInfo = profile
      }
    )
    this.profileInfo = this.profileService.getProfileData();
  }

}
