import { Component } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome, faBook,faCreditCard,faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'election-tally';
  faHome=faHome;
  faBook=faBook;
  faExclamationCircle=faExclamationCircle;
  faCreditCard=faCreditCard;
  faHandshakeAngle=faHandshakeAngle;
}
