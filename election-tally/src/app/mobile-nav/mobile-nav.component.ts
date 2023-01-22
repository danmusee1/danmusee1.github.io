import { Component } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome, faBook,faCreditCard,faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent {
  faHome=faHome;
  faBook=faBook;
  faExclamationCircle=faExclamationCircle;
  faCreditCard=faCreditCard;
  faHandshakeAngle=faHandshakeAngle;
}
