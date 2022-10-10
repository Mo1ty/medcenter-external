import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/model/profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileId: number = 4;
  /*  Either make it get id
      from a common source, where
      token & other data will be located,
      or implement it straight
      into profile-data storage service
      after successful authentication   */
  profileInfo!: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.profileUpdated.subscribe(
      (profile) => {
        this.profileInfo = profile
      }
    )
    this.profileService.getProfileData(this.profileId);
  }

}
