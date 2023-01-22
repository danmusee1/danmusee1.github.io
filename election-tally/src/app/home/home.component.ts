import { Component } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome, faBook,faCreditCard,faHandshakeAngle,faCirclePlay } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'election-tally';
  faCirclePlay=faCirclePlay;
  faHome=faHome;
  faBook=faBook;
  faExclamationCircle=faExclamationCircle;
  faCreditCard=faCreditCard;
  faHandshakeAngle=faHandshakeAngle;

}
