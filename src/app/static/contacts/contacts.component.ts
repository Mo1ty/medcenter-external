import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Contacts init")
  }

}
