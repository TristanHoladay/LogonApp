import { Component, OnInit } from '@angular/core';
import { IUserProfile } from '../interfaces/iuser-profile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      dob: new FormControl(),
      homeAddress: new FormControl(),
      favoriteFood: new FormControl(),
      favoriteMovie: new FormControl(),
      favoriteArtist: new FormControl(),
      hobbies: new FormControl(),
    });
  }


  onSubmit(userProfile: any) {

  }
}
