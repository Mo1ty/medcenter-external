import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonDataStorageService } from 'src/app/shared/common-data-storage.service';
import { Address } from 'src/app/shared/model/address.model';
import { Profile } from '../../shared/model/profile.model';
import { ProfileDataStorageService } from './profile-data-storage.service';
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
  addressInfo!: Address;

  addressForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private profileService: ProfileService,
    private commonStorage: ProfileDataStorageService
  ) { }

  ngOnInit(): void {
    this.profileService.profileUpdated.subscribe(
      (profile) => {
        this.profileInfo = profile;
      }
    )
    this.profileInfo = this.profileService.getProfileInfo();

    this.addressForm = new FormGroup({
      'city': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'house':new FormControl(null, Validators.required),
    })

    this.profileService.addressUpdated.subscribe(
      (address) => {
        this.addressInfo = address;
        this.addressForm.patchValue({
          'city': this.addressInfo.city,
          'street': this.addressInfo.street,
          'house': this.addressInfo.houseNumber
        })
      }
    )
    this.addressInfo = this.profileService.getAddressInfo();
  }

  onSubmit(form: FormGroup){
    let editAddress = structuredClone(this.addressInfo);
    editAddress.city = form.controls['city'].value;
    editAddress.street = form.controls['street'].value;
    editAddress.houseNumber = form.controls['house'].value;
    this.commonStorage.updateAddress(editAddress);
    this.addressInfo = editAddress;
    this.onEditSwitch();
  }

  onEditSwitch(){
    this.editMode = !this.editMode
  }
}
