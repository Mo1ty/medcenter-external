import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/model/address.model';
import { Client } from '../../shared/model/client.model';
import { ProfileDataStorageService } from '../../shared/data-storage/profile.data-storage.service';
import { ProfileService } from '../../shared/service/profile.service';
import { Contact } from 'src/app/shared/model/contact.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {

  contactInfo!: Contact;
  clientInfo!: Client;
  addressInfo!: Address;

  addressForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private profileService: ProfileService,
    private profileDataStorage: ProfileDataStorageService
  ) { }

  ngOnInit(): void {
    this.profileService.clientUpdated.subscribe(
      (profile) => {
        this.clientInfo = profile;
      }
    )
    this.clientInfo = this.profileService.clientInfo;

    this.profileService.contactUpdated.subscribe(
      (contact) => {
        this.contactInfo = contact;
      }
    )
    this.contactInfo = this.profileService.contact;

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
    this.addressInfo = this.profileService.addressInfo;

    this.addressForm = new FormGroup({
      'city': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'house':new FormControl(null, Validators.required),
    })

  }

  onSubmit(form: FormGroup){
    let editAddress = structuredClone(this.addressInfo);
    editAddress.city = form.controls['city'].value;
    editAddress.street = form.controls['street'].value;
    editAddress.houseNumber = form.controls['house'].value;
    this.profileDataStorage.updateContactAddress(editAddress);
    this.addressInfo = editAddress;
    this.onEditSwitch();
  }

  onEditSwitch(){
    this.editMode = !this.editMode
  }
}
