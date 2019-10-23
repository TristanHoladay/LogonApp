import { Component, OnInit } from '@angular/core';
import { IUserProfile } from '../interfaces/iuser-profile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  profile: object = {};

  constructor(private formBuilder: FormBuilder, private profileService: UserProfileService) { }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      dob: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      homeAddress: new FormControl(),
      favoriteFood: new FormControl(),
      favoriteMovie: new FormControl(),
      favoriteArtist: new FormControl(),
      hobbies: new FormControl(),
    });
  }


  onSubmit(userProfile: any) {
    this.profileService.post(userProfile).subscribe(console.log);
  }
}
