import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  role = new FormControl('');
  organizationName = new FormControl('');
  industry = new FormControl('');
  location = new FormControl('');
  memberSize = new FormControl('');

}
